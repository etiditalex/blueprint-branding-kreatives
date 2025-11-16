import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '../../../../../backend/lib/supabase';

// List of all existing static pages in the app directory
const STATIC_PAGES = [
  { slug: '', title: 'Home', template: 'home' },
  { slug: 'about', title: 'About Us', template: 'default' },
  { slug: 'about/ai', title: 'How We Use AI', template: 'default' },
  { slug: 'about/faq', title: 'Frequently Asked Questions', template: 'default' },
  { slug: 'about/industries', title: 'Industries We Serve', template: 'default' },
  { slug: 'about/our-story', title: 'Our Story', template: 'default' },
  { slug: 'about/partnership', title: 'Partnership', template: 'default' },
  { slug: 'about/team', title: 'Our Team', template: 'default' },
  { slug: 'about/testimonials', title: 'Testimonials', template: 'default' },
  { slug: 'services', title: 'Our Services', template: 'default' },
  { slug: 'portfolio', title: 'Portfolio', template: 'default' },
  { slug: 'contact', title: 'Contact Us', template: 'default' },
  { slug: 'booking', title: 'Book a Consultation', template: 'default' },
  { slug: 'insights', title: 'Insights & Blog', template: 'default' },
  { slug: 'seo', title: 'SEO Services', template: 'default' },
  { slug: 'seo/general-seo', title: 'General SEO', template: 'default' },
  { slug: 'seo/ecommerce-seo', title: 'E-commerce SEO', template: 'default' },
  { slug: 'seo/local-seo', title: 'Local SEO', template: 'default' },
  { slug: 'seo/onpage-seo', title: 'On-Page SEO', template: 'default' },
  { slug: 'seo/technical-seo', title: 'Technical SEO', template: 'default' },
  { slug: 'websites', title: 'Websites', template: 'default' },
  { slug: 'websites/web-hosting-domain', title: 'Web Hosting & Domain Registration', template: 'default' },
  { slug: 'websites/content-creation', title: 'Front Content Creation', template: 'default' },
  { slug: 'websites/maintenance', title: 'Website Maintenance', template: 'default' },
];

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerClient();
    const syncedPages = [];
    const skippedPages = [];

    for (const page of STATIC_PAGES) {
      // Check if page already exists
      const { data: existing } = await supabase
        .from('pages')
        .select('id')
        .eq('slug', page.slug)
        .single();

      if (existing) {
        skippedPages.push({ slug: page.slug, reason: 'Already exists' });
        continue;
      }

      // Create the page
      const { data, error } = await supabase
        .from('pages')
        .insert([{
          slug: page.slug,
          title: page.title,
          content: `This is the ${page.title} page. Content can be edited here.`,
          meta_description: `${page.title} - Blueprint Branding Kreatives`,
          is_published: true,
          template: page.template,
          display_order: 0,
        }])
        .select()
        .single();

      if (error) {
        skippedPages.push({ slug: page.slug, reason: error.message });
        continue;
      }

      syncedPages.push(data);
    }

    return NextResponse.json({
      success: true,
      synced: syncedPages.length,
      skipped: skippedPages.length,
      syncedPages,
      skippedPages,
    }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({
      success: true,
      staticPages: STATIC_PAGES,
      total: STATIC_PAGES.length,
    }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}

