import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '../../../../backend/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerClient();
    
    const { data, error } = await supabase
      .from('navigation_items')
      .select('*')
      .order('order_index', { ascending: true });

    if (error) {
      return NextResponse.json(
        { error: 'Failed to fetch navigation items', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { label, url, icon, parent_id, order_index, has_dropdown, is_active } = body;

    if (!label || !url) {
      return NextResponse.json(
        { error: 'Missing required fields: label, url' },
        { status: 400 }
      );
    }

    const supabase = createServerClient();

    const { data, error } = await supabase
      .from('navigation_items')
      .insert([{
        label,
        url,
        icon: icon || null,
        parent_id: parent_id || null,
        order_index: order_index || 0,
        has_dropdown: has_dropdown || false,
        is_active: is_active !== undefined ? is_active : true,
      }])
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { error: 'Failed to create navigation item', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}

