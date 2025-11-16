import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '../../../../backend/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerClient();
    
    const { data, error } = await supabase
      .from('media_items')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      return NextResponse.json(
        { error: 'Failed to fetch media items', details: error.message },
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
    const { filename, url, alt_text, category, tags } = body;

    if (!filename || !url) {
      return NextResponse.json(
        { error: 'Missing required fields: filename, url' },
        { status: 400 }
      );
    }

    const supabase = createServerClient();

    const { data, error } = await supabase
      .from('media_items')
      .insert([{
        filename,
        url,
        alt_text: alt_text || null,
        category: category || 'image',
        tags: tags || [],
      }])
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { error: 'Failed to create media item', details: error.message },
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

