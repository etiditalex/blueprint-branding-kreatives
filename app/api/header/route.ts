import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '../../../backend/lib/supabase';

// Disable caching for this route
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerClient();
    
    const { data, error } = await supabase
      .from('header_content')
      .select('*')
      .limit(1)
      .single();

    if (error) {
      // If no header content exists, return defaults
      return NextResponse.json(
        { 
          success: true, 
          data: {
            logo_url: '/logo.png',
            logo_alt_text: 'Blueprint Branding Kreatives Logo',
            logo_width: 70,
            logo_height: 70,
            cta_text: 'Book Now',
            cta_url: '/booking',
          }
        },
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
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}

