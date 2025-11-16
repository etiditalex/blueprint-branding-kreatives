import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { generateSEOMetadata, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo";

// Force dynamic rendering - don't statically generate this route
export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Static routes that should not be handled by this dynamic route
const STATIC_ROUTES = [
  'admin',
  'admin-login',
  'api',
  'insights',
  'contact',
  'booking',
  'portfolio',
  'services',
  'about',
  'seo',
  'websites',
  'debug-pages', // Debug route
  'test-page-connection', // Test route
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  
  // Skip metadata generation for static routes
  if (STATIC_ROUTES.includes(slug)) {
    return {
      title: "Page Not Found - Blueprint Branding Kreatives",
    };
  }

  try {
    const { createServerClient } = await import('@/backend/lib/supabase');
    const supabase = createServerClient();
    
    const { data: page } = await supabase
      .from('pages')
      .select('title, meta_description, slug, image_url, meta_keywords')
      .eq('slug', slug)
      .eq('is_published', true)
      .single();
    
    if (page) {
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.vercel.app';
      return generateSEOMetadata({
        title: page.title,
        description: page.meta_description || page.title,
        url: `${siteUrl}/${page.slug}`,
        image: page.image_url || undefined,
        keywords: page.meta_keywords || [],
      });
    }
  } catch (error) {
    console.error("Error fetching page metadata:", error);
  }

  return {
    title: "Page Not Found - Blueprint Branding Kreatives",
  };
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;
  
  // Don't handle static routes
  if (STATIC_ROUTES.includes(slug)) {
    notFound();
  }

  let page = null;
  try {
    const { createServerClient } = await import('@/backend/lib/supabase');
    const supabase = createServerClient();
    
    console.log('Fetching page with slug:', slug); // Debug log
    
    const { data, error } = await supabase
      .from('pages')
      .select('*')
      .eq('slug', slug)
      .eq('is_published', true)
      .single();
    
    if (error) {
      console.error('Supabase error fetching page:', error);
      console.error('Error details:', JSON.stringify(error, null, 2));
      // Log more details for debugging
      if (error.code === 'PGRST116') {
        console.log('Page not found in database for slug:', slug);
        // Try to find pages with similar slugs for debugging
        const { data: allPages } = await supabase
          .from('pages')
          .select('slug, title, is_published')
          .limit(10);
        console.log('Available pages in database:', allPages);
      }
    }
    
    if (!error && data) {
      console.log('✅ Page found:', data.title, 'is_published:', data.is_published, 'slug:', data.slug);
      page = data;
    } else if (!error && !data) {
      console.log('⚠️ No data returned for slug:', slug);
      // Try fetching without is_published filter to see if page exists but is unpublished
      const { data: unpublishedPage } = await supabase
        .from('pages')
        .select('*')
        .eq('slug', slug)
        .single();
      if (unpublishedPage) {
        console.log('⚠️ Page exists but is unpublished. is_published:', unpublishedPage.is_published);
      }
    }
  } catch (error) {
    console.error("Error fetching page:", error);
  }

  if (!page || !page.is_published) {
    console.log('Page not found or not published. Slug:', slug, 'Page:', page);
    notFound();
  }

  // Parse content - it might be a string or array
  let content: string[] = [];
  if (typeof page.content === 'string') {
    // Split by double newlines to create paragraphs
    content = page.content.split(/\n\n+/).filter((p: string) => p.trim());
  } else if (Array.isArray(page.content)) {
    content = page.content;
  } else {
    content = [page.content || ''];
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.vercel.app';
  const pageUrl = `${siteUrl}/${page.slug}`;
  
  // Generate structured data
  const articleSchema = generateArticleSchema({
    title: page.title,
    description: page.meta_description || page.title,
    image: page.image_url,
    url: pageUrl,
    publishedTime: page.created_at,
    modifiedTime: page.updated_at || page.created_at,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: page.title, url: pageUrl },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <main className="min-h-screen">
        <Navbar />
        <div className="pt-24">
          <article className="py-20 bg-white" itemScope itemType="https://schema.org/Article">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="max-w-4xl mx-auto">
              {page.image_url && (
                <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
                  <Image
                    src={page.image_url}
                    alt={page.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              )}

              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6" itemProp="headline">
                {page.title}
              </h1>

              <div className="prose prose-lg max-w-none">
                {content.map((paragraph, index) => {
                  // Check if content contains HTML tags
                  const hasHTML = /<[a-z][\s\S]*>/i.test(paragraph);
                  
                  return (
                    <div
                      key={index}
                      className="text-gray-700 leading-relaxed mb-6"
                      dangerouslySetInnerHTML={hasHTML ? { __html: paragraph } : undefined}
                    >
                      {!hasHTML && paragraph}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </main>
    </>
  );
}

