-- Fix published posts that don't have published_at date
-- Run this in Supabase SQL Editor

UPDATE blog_posts
SET published_at = created_at
WHERE published = true 
  AND published_at IS NULL;

-- Also set published_at for any posts that should be published
UPDATE blog_posts
SET published_at = COALESCE(published_at, created_at, NOW())
WHERE published = true;

