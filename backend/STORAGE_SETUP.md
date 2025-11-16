# Supabase Storage Setup for Media Library

## Quick Setup

1. Go to your Supabase Dashboard → **Storage**
2. Click **"New bucket"**
3. Name it: `media`
4. Make it **Public** (toggle on)
5. Click **"Create bucket"**

## Alternative: Use SQL Script

1. Go to Supabase Dashboard → **SQL Editor**
2. Copy and paste the contents of `backend/supabase/storage-setup.sql`
3. Click **"Run"**

This will:
- Create the `media` storage bucket
- Set up public read access
- Allow authenticated users to upload/update/delete files

## File Limits

- **Max file size**: 10MB per file
- **Supported formats**: Images only (JPG, PNG, GIF, WebP)
- **Multiple files**: You can upload multiple files at once

## Usage

Once the bucket is created, you can:
1. Go to `/admin/media` in your admin dashboard
2. Drag and drop images or click to browse
3. Images will be automatically uploaded and stored
4. Copy the URL to use images in your content

## Troubleshooting

### "Bucket not found" error?
- Make sure you created the `media` bucket in Supabase Storage
- Check that the bucket name is exactly `media` (lowercase)

### Upload fails?
- Check file size (must be under 10MB)
- Check file type (images only)
- Verify storage policies are set correctly

### Can't see uploaded images?
- Check that the bucket is set to **Public**
- Verify the storage policies allow public read access

