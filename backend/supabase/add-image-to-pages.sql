-- Add image_url column to pages table
-- Run this in Supabase SQL Editor

ALTER TABLE pages 
ADD COLUMN IF NOT EXISTS image_url TEXT;

