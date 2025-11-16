CREATE TABLE IF NOT EXISTS site_settings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  key VARCHAR(255) UNIQUE NOT NULL,
  value TEXT,
  type VARCHAR(50) DEFAULT 'text',
  category VARCHAR(100),
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS navigation_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  label VARCHAR(255) NOT NULL,
  url VARCHAR(500) NOT NULL,
  icon VARCHAR(100),
  parent_id UUID REFERENCES navigation_items(id) ON DELETE CASCADE,
  order_index INTEGER DEFAULT 0,
  has_dropdown BOOLEAN DEFAULT false,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS header_content (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  logo_url TEXT,
  logo_alt_text VARCHAR(255),
  cta_text VARCHAR(255),
  cta_url VARCHAR(500),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS footer_content (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  company_name VARCHAR(255),
  description TEXT,
  address TEXT,
  phone VARCHAR(50),
  email VARCHAR(255),
  social_links JSONB,
  copyright_text TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS media_items (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  filename VARCHAR(255) NOT NULL,
  url TEXT NOT NULL,
  alt_text VARCHAR(255),
  mime_type VARCHAR(100),
  file_size INTEGER,
  width INTEGER,
  height INTEGER,
  category VARCHAR(100),
  tags TEXT[],
  uploaded_by UUID,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS pages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug VARCHAR(255) UNIQUE NOT NULL,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  meta_description TEXT,
  meta_keywords TEXT[],
  is_published BOOLEAN DEFAULT false,
  template VARCHAR(100) DEFAULT 'default',
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_site_settings_key ON site_settings(key);
CREATE INDEX IF NOT EXISTS idx_site_settings_category ON site_settings(category);
CREATE INDEX IF NOT EXISTS idx_navigation_items_parent ON navigation_items(parent_id);
CREATE INDEX IF NOT EXISTS idx_navigation_items_order ON navigation_items(order_index);
CREATE INDEX IF NOT EXISTS idx_media_items_category ON media_items(category);
CREATE INDEX IF NOT EXISTS idx_media_items_uploaded_by ON media_items(uploaded_by);
CREATE INDEX IF NOT EXISTS idx_pages_slug ON pages(slug);
CREATE INDEX IF NOT EXISTS idx_pages_published ON pages(is_published);

ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE navigation_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE header_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE footer_content ENABLE ROW LEVEL SECURITY;
ALTER TABLE media_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE pages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public reads on site settings" ON site_settings;
DROP POLICY IF EXISTS "Allow admin all operations on site settings" ON site_settings;

CREATE POLICY "Allow public reads on site settings"
  ON site_settings FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow admin all operations on site settings"
  ON site_settings FOR ALL
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "Allow public reads on navigation items" ON navigation_items;
DROP POLICY IF EXISTS "Allow admin all operations on navigation items" ON navigation_items;

CREATE POLICY "Allow public reads on navigation items"
  ON navigation_items FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

CREATE POLICY "Allow admin all operations on navigation items"
  ON navigation_items FOR ALL
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "Allow public reads on header content" ON header_content;
DROP POLICY IF EXISTS "Allow admin all operations on header content" ON header_content;

CREATE POLICY "Allow public reads on header content"
  ON header_content FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow admin all operations on header content"
  ON header_content FOR ALL
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "Allow public reads on footer content" ON footer_content;
DROP POLICY IF EXISTS "Allow admin all operations on footer content" ON footer_content;

CREATE POLICY "Allow public reads on footer content"
  ON footer_content FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow admin all operations on footer content"
  ON footer_content FOR ALL
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "Allow public reads on media items" ON media_items;
DROP POLICY IF EXISTS "Allow admin all operations on media items" ON media_items;

CREATE POLICY "Allow public reads on media items"
  ON media_items FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Allow admin all operations on media items"
  ON media_items FOR ALL
  TO authenticated
  USING (true);

DROP POLICY IF EXISTS "Allow public reads on published pages" ON pages;
DROP POLICY IF EXISTS "Allow admin all operations on pages" ON pages;

CREATE POLICY "Allow public reads on published pages"
  ON pages FOR SELECT
  TO anon, authenticated
  USING (is_published = true);

CREATE POLICY "Allow admin all operations on pages"
  ON pages FOR ALL
  TO authenticated
  USING (true);

INSERT INTO header_content (id, logo_url, logo_alt_text, cta_text, cta_url)
VALUES (
  '00000000-0000-0000-0000-000000000001',
  '/logo.png',
  'Blueprint Branding Kreatives Logo',
  'Book Now',
  '/booking'
) ON CONFLICT (id) DO NOTHING;

INSERT INTO footer_content (id, company_name, copyright_text)
VALUES (
  '00000000-0000-0000-0000-000000000001',
  'Blueprint Branding Kreatives',
  '© 2025 Blueprint Branding Kreatives. All rights reserved.'
) ON CONFLICT (id) DO NOTHING;

