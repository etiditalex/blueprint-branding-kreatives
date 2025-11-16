import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '../../../../../backend/lib/supabase';
import { portfolioItems } from '@/lib/siteConfig';

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerClient();
    const syncedItems = [];
    const skippedItems = [];

    for (const item of portfolioItems) {
      // Check if item already exists by checking title
      const { data: existing } = await supabase
        .from('portfolio_items')
        .select('id')
        .eq('title', item.title)
        .single();

      if (existing) {
        skippedItems.push({ title: item.title, reason: 'Already exists' });
        continue;
      }

      // Create the portfolio item
      const { data, error } = await supabase
        .from('portfolio_items')
        .insert([{
          title: item.title,
          category: item.category || 'Other',
          description: item.description || null,
          image_url: item.image || null,
          url: item.url || null,
          technologies: item.technologies || [],
          featured: false,
          display_order: 0,
        }])
        .select()
        .single();

      if (error) {
        skippedItems.push({ title: item.title, reason: error.message });
        continue;
      }

      syncedItems.push(data);
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
      staticItems: portfolioItems.map(i => ({ title: i.title, category: i.category })),
      total: portfolioItems.length,
    }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}

