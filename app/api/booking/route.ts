import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '../../../backend/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      service,
      date,
      time,
      message,
    } = body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Use service role client to bypass RLS
    const supabase = createServerClient();

    // Insert into Supabase
    const { data, error } = await supabase
      .from('bookings')
      .insert([
        {
          first_name: firstName,
          last_name: lastName,
          email,
          phone,
          company: company || null,
          service,
          preferred_date: date || null,
          preferred_time: time || null,
          message: message || null,
          status: 'pending',
        },
      ])
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json(
        { error: 'Failed to submit booking request', details: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, data },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Booking form error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}
