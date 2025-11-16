import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '../../../../backend/lib/supabase';

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerClient();
    
    const { data, error } = await supabase
      .from('site_settings')
      .select('*')
      .order('category', { ascending: true });

    if (error) {
      return NextResponse.json(
        { error: 'Failed to fetch settings', details: error.message },
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
    const { key, value, type, category, description } = body;

    if (!key || value === undefined) {
      return NextResponse.json(
        { error: 'Missing required fields: key, value' },
        { status: 400 }
      );
    }

    const supabase = createServerClient();

    const { data, error } = await supabase
      .from('site_settings')
      .insert([{
        key,
        value: typeof value === 'string' ? value : JSON.stringify(value),
        type: type || 'text',
        category: category || 'general',
        description: description || null,
      }])
      .select()
      .single();

    if (error) {
      return NextResponse.json(
        { error: 'Failed to create setting', details: error.message },
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

