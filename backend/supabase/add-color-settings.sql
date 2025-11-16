-- Add color settings to site_settings table
-- Run this in Supabase SQL Editor

-- Insert default color settings if they don't exist
INSERT INTO site_settings (key, value, type, category, description)
VALUES 
  ('primary_color', '#3c3c87', 'text', 'design', 'Primary brand color'),
  ('accent_color', '#f04b1e', 'text', 'design', 'Accent brand color'),
  ('primary_color_50', '#e8e8f5', 'text', 'design', 'Primary color shade 50'),
  ('primary_color_100', '#d1d1eb', 'text', 'design', 'Primary color shade 100'),
  ('primary_color_200', '#a3a3d7', 'text', 'design', 'Primary color shade 200'),
  ('primary_color_300', '#7575c3', 'text', 'design', 'Primary color shade 300'),
  ('primary_color_400', '#4747af', 'text', 'design', 'Primary color shade 400'),
  ('primary_color_500', '#3c3c87', 'text', 'design', 'Primary color shade 500'),
  ('primary_color_600', '#2e2e6a', 'text', 'design', 'Primary color shade 600'),
  ('primary_color_700', '#1e1e78', 'text', 'design', 'Primary color shade 700'),
  ('primary_color_800', '#17174d', 'text', 'design', 'Primary color shade 800'),
  ('primary_color_900', '#0f0f33', 'text', 'design', 'Primary color shade 900'),
  ('accent_color_50', '#ffe8e3', 'text', 'design', 'Accent color shade 50'),
  ('accent_color_100', '#ffd1c7', 'text', 'design', 'Accent color shade 100'),
  ('accent_color_200', '#ffa38f', 'text', 'design', 'Accent color shade 200'),
  ('accent_color_300', '#ff7557', 'text', 'design', 'Accent color shade 300'),
  ('accent_color_400', '#ff471f', 'text', 'design', 'Accent color shade 400'),
  ('accent_color_500', '#f04b1e', 'text', 'design', 'Accent color shade 500'),
  ('accent_color_600', '#c03c18', 'text', 'design', 'Accent color shade 600'),
  ('accent_color_700', '#902d12', 'text', 'design', 'Accent color shade 700'),
  ('accent_color_800', '#601e0c', 'text', 'design', 'Accent color shade 800'),
  ('accent_color_900', '#300f06', 'text', 'design', 'Accent color shade 900')
ON CONFLICT (key) DO NOTHING;

