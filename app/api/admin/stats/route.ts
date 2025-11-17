import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '../../../../backend/lib/supabase';

// Disable caching for this route
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerClient();
    
    // Fetch counts for all tables
    const [postsResult, portfolioResult, contactsResult, bookingsResult] = await Promise.all([
      supabase
        .from('blog_posts')
        .select('id', { count: 'exact', head: true }),
      supabase
        .from('portfolio_items')
        .select('id', { count: 'exact', head: true }),
      supabase
        .from('contacts')
        .select('id', { count: 'exact', head: true }),
      supabase
        .from('bookings')
        .select('id', { count: 'exact', head: true }),
    ]);

    const stats = {
      posts: postsResult.count || 0,
      portfolio: portfolioResult.count || 0,
      contacts: contactsResult.count || 0,
      bookings: bookingsResult.count || 0,
    };

    return NextResponse.json(
      { success: true, data: stats },
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
    console.error('Stats fetch error:', error);
    return NextResponse.json(
      { 
        error: 'Internal server error', 
        details: error.message,
        data: {
          posts: 0,
          portfolio: 0,
          contacts: 0,
          bookings: 0,
        }
      },
      { status: 500 }
    );
  }
}

