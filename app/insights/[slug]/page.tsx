import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { generateSEOMetadata, generateArticleSchema, generateBreadcrumbSchema } from "@/lib/seo";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  
  try {
    // Use server-side Supabase client directly
    const { createServerClient } = await import('@/backend/lib/supabase');
    const supabase = createServerClient();
    
    const { data: post } = await supabase
      .from('blog_posts')
      .select('title, excerpt, slug, image_url, published_at, updated_at, author, category')
      .eq('slug', slug)
      .eq('published', true)
      .single();
    
    if (post) {
      const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.vercel.app';
      return generateSEOMetadata({
        title: post.title,
        description: post.excerpt || post.title,
        url: `${siteUrl}/insights/${post.slug}`,
        type: 'article',
        image: post.image_url || undefined,
        publishedTime: post.published_at || undefined,
        modifiedTime: post.updated_at || post.published_at || undefined,
        author: post.author || undefined,
        keywords: post.category ? [post.category] : [],
      });
    }
  } catch (error) {
    console.error("Error fetching post metadata:", error);
  }

  return {
    title: "Post Not Found - Blueprint Branding Kreatives",
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  
  let post = null;
  try {
    // Use server-side Supabase client directly
    const { createServerClient } = await import('@/backend/lib/supabase');
    const supabase = createServerClient();
    
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .single();
    
    if (!error && data) {
      post = data;
    }
  } catch (error) {
    console.error("Error fetching blog post:", error);
  }

  if (!post || !post.published) {
    notFound();
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return "";
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return "";
    }
  };

  // Parse content - it might be a string or array
  let content: string[] = [];
  if (typeof post.content === 'string') {
    // Split by double newlines to create paragraphs
    content = post.content.split(/\n\n+/).filter((p: string) => p.trim());
  } else if (Array.isArray(post.content)) {
    content = post.content;
  } else {
    content = [post.content || ''];
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.vercel.app';
  const postUrl = `${siteUrl}/insights/${post.slug}`;
  
  // Generate structured data
  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt || post.title,
    image: post.image_url,
    url: postUrl,
    publishedTime: post.published_at,
    modifiedTime: post.updated_at || post.published_at,
    author: post.author,
  });

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: 'Home', url: siteUrl },
    { name: 'Insights', url: `${siteUrl}/insights` },
    { name: post.title, url: postUrl },
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
              <nav aria-label="Breadcrumb" className="mb-8">
                <ol className="flex items-center space-x-2 text-sm text-gray-600">
                  <li><Link href="/" className="hover:text-primary-600">Home</Link></li>
                  <li>/</li>
                  <li><Link href="/insights" className="hover:text-primary-600">Insights</Link></li>
                  <li>/</li>
                  <li className="text-gray-900">{post.title}</li>
                </ol>
              </nav>
              <Link
                href="/insights"
                className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
              >
              <svg
                className="w-4 h-4 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
              Back to Insights
            </Link>

            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  {post.category && (
                    <span className="px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  )}
                  {post.published_at && (
                    <span className="text-gray-500">{formatDate(post.published_at)}</span>
                  )}
                </div>
                        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4" itemProp="headline">
                          {post.title}
                        </h1>
                {post.author && (
                  <p className="text-gray-600">By {post.author}</p>
                )}
              </div>

              {post.image_url && (
                <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
                  <Image
                    src={post.image_url}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="prose prose-lg max-w-none">
                {content.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200">
                <Link
                  href="/insights"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold"
                >
                  <svg
                    className="w-4 h-4 mr-2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M15 19l-7-7 7-7" />
                  </svg>
                  View All Insights
                </Link>
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
