import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '../../../../backend/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerClient();
    
    const { data, error } = await supabase
      .from('portfolio_items')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) {
      return NextResponse.json(
        { error: 'Failed to fetch portfolio items', details: error.message },
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
    const { title, category, description, image_url, url, technologies, featured, display_order } = body;

    if (!title || !category || !image_url) {
      return NextResponse.json(
        { error: 'Missing required fields: title, category, image_url' },
        { status: 400 }
      );
    }

    const supabase = createServerClient();

    const { data, error } = await supabase
      .from('portfolio_items')
      .insert([{
        title,
        category,
        description: description || null,
        image_url,
        url: url || null,
        technologies: technologies || [],
        featured: featured || false,
        display_order: display_order || 0,
      }])
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { error: 'Failed to create portfolio item', details: error.message },
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

