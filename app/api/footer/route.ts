import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '../../../backend/lib/supabase';

// Disable caching for this route
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerClient();
    
    const { data, error } = await supabase
      .from('footer_content')
      .select('*')
      .limit(1)
      .single();

    if (error) {
      // If no footer content exists, return defaults
      return NextResponse.json(
        { 
          success: true, 
          data: {
            company_name: 'Blueprint Branding Kreatives',
            description: 'A digital marketing and brand development company',
            address: '',
            phone: '',
            email: '',
            social_links: {},
            copyright_text: `© ${new Date().getFullYear()} Blueprint Branding Kreatives. All rights reserved.`,
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

