import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
      .select('title, meta_description')
      .eq('slug', slug)
      .eq('is_published', true)
      .single();
    
    if (page) {
      return {
        title: `${page.title} - Blueprint Branding Kreatives`,
        description: page.meta_description || page.title,
      };
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
    
    const { data, error } = await supabase
      .from('pages')
      .select('*')
      .eq('slug', slug)
      .eq('is_published', true)
      .single();
    
    if (!error && data) {
      page = data;
    }
  } catch (error) {
    console.error("Error fetching page:", error);
  }

  if (!page || !page.is_published) {
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

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <article className="py-20 bg-white">
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

              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
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
  );
}

