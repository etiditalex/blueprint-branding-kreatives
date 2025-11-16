import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '../../../../backend/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerClient();
    
    const { data, error } = await supabase
      .from('pages')
      .select('*')
      .order('display_order', { ascending: true });

    if (error) {
      return NextResponse.json(
        { error: 'Failed to fetch pages', details: error.message },
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
    const { title, slug, content, meta_description, meta_keywords, is_published, template, display_order } = body;

    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: 'Missing required fields: title, slug, content' },
        { status: 400 }
      );
    }

    const supabase = createServerClient();

    const { data, error } = await supabase
      .from('pages')
      .insert([{
        title,
        slug,
        content,
        meta_description: meta_description || null,
        meta_keywords: meta_keywords || [],
        is_published: is_published || false,
        template: template || 'default',
        display_order: display_order || 0,
      }])
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { error: 'Failed to create page', details: error.message },
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

