-- Blueprint Branding Kreatives Database Schema
-- Run this in Supabase SQL Editor

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Contacts table for contact form submissions
CREATE TABLE IF NOT EXISTS contacts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(255),
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'new',
  notes TEXT
);

-- Bookings table for consultation booking requests
CREATE TABLE IF NOT EXISTS bookings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  company VARCHAR(255),
  service VARCHAR(255) NOT NULL,
  preferred_date DATE,
  preferred_time TIME,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  status VARCHAR(50) DEFAULT 'pending',
  confirmed_at TIMESTAMP WITH TIME ZONE,
  notes TEXT
);

-- Blog posts table for insights section
CREATE TABLE IF NOT EXISTS blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  excerpt TEXT,
  content TEXT NOT NULL,
  category VARCHAR(100),
  author VARCHAR(255),
  image_url TEXT,
  published BOOLEAN DEFAULT false,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Portfolio items table
CREATE TABLE IF NOT EXISTS portfolio_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(255) NOT NULL,
  category VARCHAR(100) NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  url TEXT,
  technologies TEXT[],
  featured BOOLEAN DEFAULT false,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Leads table for marketing leads
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  company VARCHAR(255),
  source VARCHAR(100),
  interest VARCHAR(255),
  status VARCHAR(50) DEFAULT 'new',
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_status ON contacts(status);
CREATE INDEX IF NOT EXISTS idx_bookings_created_at ON bookings(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_bookings_status ON bookings(status);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(published, published_at DESC);
CREATE INDEX IF NOT EXISTS idx_portfolio_items_category ON portfolio_items(category);
CREATE INDEX IF NOT EXISTS idx_portfolio_items_featured ON portfolio_items(featured);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);

-- Enable Row Level Security (RLS)
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist, then create new ones
-- RLS Policies for contacts
DROP POLICY IF EXISTS "Allow public inserts on contacts" ON contacts;
DROP POLICY IF EXISTS "Allow admin reads on contacts" ON contacts;

CREATE POLICY "Allow public inserts on contacts"
  ON contacts FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow admin reads on contacts"
  ON contacts FOR SELECT
  TO authenticated
  USING (true);

-- RLS Policies for bookings
DROP POLICY IF EXISTS "Allow public inserts on bookings" ON bookings;
DROP POLICY IF EXISTS "Allow admin reads on bookings" ON bookings;

CREATE POLICY "Allow public inserts on bookings"
  ON bookings FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow admin reads on bookings"
  ON bookings FOR SELECT
  TO authenticated
  USING (true);

-- RLS Policies for blog_posts
DROP POLICY IF EXISTS "Allow public reads on published blog posts" ON blog_posts;
DROP POLICY IF EXISTS "Allow admin all operations on blog posts" ON blog_posts;

CREATE POLICY "Allow public reads on published blog posts"
  ON blog_posts FOR SELECT
  TO anon, authenticated
  USING (published = true);

CREATE POLICY "Allow admin all operations on blog posts"
  ON blog_posts FOR ALL
  TO authenticated
  USING (true);

-- RLS Policies for portfolio_items
DROP POLICY IF EXISTS "Allow public reads on portfolio items" ON portfolio_items;
DROP POLICY IF EXISTS "Allow admin all operations on portfolio items" ON portfolio_items;

CREATE POLICY "Allow public reads on portfolio items"
  ON portfolio_items FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow admin all operations on portfolio items"
  ON portfolio_items FOR ALL
  TO authenticated
  USING (true);

-- RLS Policies for leads
DROP POLICY IF EXISTS "Allow public inserts on leads" ON leads;
DROP POLICY IF EXISTS "Allow admin reads on leads" ON leads;

CREATE POLICY "Allow public inserts on leads"
  ON leads FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Allow admin reads on leads"
  ON leads FOR SELECT
  TO authenticated
  USING (true);
