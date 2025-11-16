import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '../../../backend/lib/supabase';

// Disable caching for this route
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10');
    const category = searchParams.get('category');

    const supabase = createServerClient();

    let query = supabase
      .from('blog_posts')
      .select('*')
      .eq('published', true);
    
    // Order by published_at if available, otherwise by created_at
    query = query.order('published_at', { ascending: false, nullsFirst: false })
                 .order('created_at', { ascending: false });
    
    query = query.limit(limit);

    if (category) {
      query = query.eq('category', category);
    }

    const { data, error } = await query;
    
    console.log('Blog posts fetched:', data?.length || 0, 'posts');
    if (data && data.length > 0) {
      console.log('First post image_url:', data[0].image_url);
      console.log('All posts image_urls:', data.map(p => ({ id: p.id, title: p.title, image_url: p.image_url })));
    }

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to fetch blog posts' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, data },
      {
        status: 200,
        headers: {
          'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0',
        },
      }
    );
  } catch (error) {
    console.error('Blog fetch error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

