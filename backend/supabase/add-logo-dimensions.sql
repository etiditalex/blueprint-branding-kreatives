-- Add logo dimensions to header_content table
-- Run this in Supabase SQL Editor

ALTER TABLE header_content 
ADD COLUMN IF NOT EXISTS logo_width INTEGER DEFAULT 70,
ADD COLUMN IF NOT EXISTS logo_height INTEGER DEFAULT 70;

