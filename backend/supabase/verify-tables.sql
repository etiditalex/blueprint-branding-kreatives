-- Verification queries to check if tables were created
-- Run these in Supabase SQL Editor to verify your setup

-- Check if all tables exist
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name IN ('contacts', 'bookings', 'blog_posts', 'portfolio_items', 'leads')
ORDER BY table_name;

-- Check table structures
SELECT 
    table_name,
    column_name,
    data_type,
    is_nullable
FROM information_schema.columns
WHERE table_schema = 'public'
AND table_name IN ('contacts', 'bookings', 'blog_posts', 'portfolio_items', 'leads')
ORDER BY table_name, ordinal_position;

-- Check if indexes were created
SELECT 
    tablename,
    indexname
FROM pg_indexes
WHERE schemaname = 'public'
AND tablename IN ('contacts', 'bookings', 'blog_posts', 'portfolio_items', 'leads')
ORDER BY tablename, indexname;

-- Check RLS policies
SELECT 
    schemaname,
    tablename,
    policyname,
    permissive,
    roles,
    cmd
FROM pg_policies
WHERE schemaname = 'public'
AND tablename IN ('contacts', 'bookings', 'blog_posts', 'portfolio_items', 'leads')
ORDER BY tablename, policyname;


