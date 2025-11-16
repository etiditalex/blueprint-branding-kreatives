import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '../../../../../backend/lib/supabase';
import { navigationItems, websitesSubPages, seoSubPages, aboutSubPages } from '@/lib/siteConfig';

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerClient();
    const syncedItems = [];
    const skippedItems = [];

    // Helper function to find or create parent
    const findOrCreateParent = async (label: string, url: string, order: number) => {
      const { data: existing } = await supabase
        .from('navigation_items')
        .select('id')
        .eq('label', label)
        .single();

      if (existing) {
        return existing.id;
      }

      const { data: newItem } = await supabase
        .from('navigation_items')
        .insert([{
          label,
          url,
          order_index: order,
          has_dropdown: true,
          is_active: true,
        }])
        .select()
        .single();

      return newItem?.id;
    };

    // Sync main navigation items
    for (let i = 0; i < navigationItems.length; i++) {
      const item = navigationItems[i];
      
      // Check if item already exists
      const { data: existing } = await supabase
        .from('navigation_items')
        .select('id')
        .eq('label', item.name)
        .single();

      if (existing) {
        skippedItems.push({ label: item.name, reason: 'Already exists' });
        continue;
      }

      let parentId = null;
      if (item.hasDropdown) {
        if (item.name === 'Websites') {
          parentId = await findOrCreateParent('Websites', '/websites', i);
        } else if (item.name === 'SEO') {
          parentId = await findOrCreateParent('SEO', '/seo', i);
        } else if (item.name === 'About') {
          parentId = await findOrCreateParent('About', '/about', i);
        }
      }

      // Create main item
      const { data, error } = await supabase
        .from('navigation_items')
        .insert([{
          label: item.name,
          url: item.href,
          order_index: i,
          has_dropdown: item.hasDropdown || false,
          is_active: true,
          parent_id: parentId,
        }])
        .select()
        .single();

      if (error) {
        skippedItems.push({ label: item.name, reason: error.message });
        continue;
      }

      syncedItems.push(data);

      // Add sub-items if dropdown exists
      if (item.hasDropdown && parentId) {
        let subPages: any[] = [];
        if (item.name === 'Websites') subPages = websitesSubPages;
        else if (item.name === 'SEO') subPages = seoSubPages;
        else if (item.name === 'About') subPages = aboutSubPages;

        for (let j = 0; j < subPages.length; j++) {
          const subPage = subPages[j];
          const { data: subData, error: subError } = await supabase
            .from('navigation_items')
            .insert([{
              label: subPage.name,
              url: subPage.href,
              parent_id: parentId,
              order_index: j,
              has_dropdown: false,
              is_active: true,
            }])
            .select()
            .single();

          if (!subError && subData) {
            syncedItems.push(subData);
          }
        }
      }
    }

    return NextResponse.json({
      success: true,
      synced: syncedItems.length,
      skipped: skippedItems.length,
      syncedItems,
      skippedItems,
    }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      staticItems: navigationItems.map(i => ({ label: i.name, url: i.href })),
      total: navigationItems.length,
    }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}

