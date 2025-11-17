import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '../../../backend/lib/supabase';

// Disable caching for this route
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerClient();
    
    const { data, error } = await supabase
      .from('navigation_items')
      .select('*')
      .eq('is_active', true)
      .order('order_index', { ascending: true });

    if (error) {
      console.error('Navigation fetch error:', error);
      // Return empty array if error
      return NextResponse.json(
        { success: true, data: [] },
        {
          status: 200,
          headers: {
            'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
            'Pragma': 'no-cache',
            'Expires': '0',
          },
        }
      );
    }

    // Organize navigation items into parent-child structure
    const topLevelItems = (data || []).filter((item) => !item.parent_id);
    const childItems = (data || []).filter((item) => item.parent_id);

    const organizedItems = topLevelItems.map((item) => {
      const children = childItems.filter((child) => child.parent_id === item.id);
      return {
        ...item,
        children: children.length > 0 ? children : undefined,
      };
    });

    return NextResponse.json(
      { success: true, data: organizedItems },
      {
        status: 200,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
      }
    );
  } catch (error: any) {
    console.error('Navigation error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}

