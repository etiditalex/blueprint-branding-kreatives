import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '../../../backend/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Check environment variables first
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    
    if (!supabaseUrl || !serviceRoleKey) {
      console.error('Missing env vars:', {
        hasUrl: !!supabaseUrl,
        hasKey: !!serviceRoleKey
      });
      return NextResponse.json(
        { 
          error: 'Server configuration error', 
          details: 'Missing Supabase environment variables. Please ensure .env.local is configured and the server has been restarted.' 
        },
        { status: 500 }
      );
    }

    // Use service role client to bypass RLS
    let supabase;
    try {
      supabase = createServerClient();
    } catch (clientError: any) {
      console.error('Failed to create Supabase client:', clientError);
      return NextResponse.json(
        { 
          error: 'Server configuration error', 
          details: clientError.message || 'Failed to initialize database connection' 
        },
        { status: 500 }
      );
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from('contacts')
      .insert([
        {
          name,
          email,
          phone: phone || null,
          company: company || null,
          message,
          status: 'new',
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to submit contact form', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, data },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Contact form error:', error);
    console.error('Error stack:', error.stack);
    return NextResponse.json(
      { 
        error: 'Internal server error', 
        details: error.message || 'An unexpected error occurred',
        type: error.name || 'UnknownError'
      },
      { status: 500 }
    );
  }
}
