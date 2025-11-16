import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '../../../../../backend/lib/supabase';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const files = formData.getAll('files') as File[];

    if (!files || files.length === 0) {
      return NextResponse.json(
        { error: 'No files provided' },
        { status: 400 }
      );
    }

    const supabase = createServerClient();
    const uploadedItems = [];

    for (const file of files) {
      // Validate file size (10MB max)
      if (file.size > 10 * 1024 * 1024) {
        continue; // Skip files that are too large
      }

      // Validate file type
      if (!file.type.startsWith('image/')) {
        continue; // Skip non-image files
      }

      // Generate unique filename
      const timestamp = Date.now();
      const randomStr = Math.random().toString(36).substring(2, 15);
      const fileExt = file.name.split('.').pop();
      const fileName = `${timestamp}-${randomStr}.${fileExt}`;
      const filePath = `media/${fileName}`;

      // Convert file to buffer
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      // Upload to Supabase Storage
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('media')
        .upload(filePath, buffer, {
          contentType: file.type,
          upsert: false,
        });

      if (uploadError) {
        // If bucket doesn't exist, return helpful error
        if (uploadError.message.includes('Bucket not found') || uploadError.message.includes('The resource was not found') || uploadError.message.includes('not found')) {
          return NextResponse.json(
            { error: 'Storage bucket not found. Please create a "media" bucket in Supabase Storage. See backend/STORAGE_SETUP.md for instructions.' },
            { status: 500 }
          );
        }
        console.error('Upload error:', uploadError);
        continue; // Skip this file and continue with others
      }

      // Get public URL
      const { data: urlData } = supabase.storage
        .from('media')
        .getPublicUrl(filePath);

      // Determine category based on file type
      let category = 'image';
      if (file.type.includes('video')) category = 'video';
      else if (file.type.includes('pdf') || file.type.includes('document')) category = 'document';

      // Save to database
      const { data: dbData, error: dbError } = await supabase
        .from('media_items')
        .insert([{
          filename: file.name,
          url: urlData.publicUrl,
          alt_text: file.name.split('.')[0], // Use filename without extension as alt text
          mime_type: file.type,
          file_size: file.size,
          category: category,
        }])
        .select()
        .single();

      if (dbError) {
        console.error('Database error:', dbError);
        continue;
      }

      uploadedItems.push(dbData);
    }

    if (uploadedItems.length === 0) {
      return NextResponse.json(
        { error: 'No files were uploaded. Please check file size (max 10MB) and type (images only).' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: true, data: uploadedItems, count: uploadedItems.length },
      { status: 201 }
    );
  } catch (error: any) {
    console.error('Upload error:', error);
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}

