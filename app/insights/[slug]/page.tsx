import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/siteConfig";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - Blueprint Branding Kreatives`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <article className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                  <span className="px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                    {post.category}
                  </span>
                  <span className="text-gray-500">{post.date}</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
                  {post.title}
                </h1>
                {post.author && (
                  <p className="text-gray-600">By {post.author}</p>
                )}
              </div>

              {post.image && (
                <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <div className="prose prose-lg max-w-none">
                {post.content.map((paragraph, index) => (
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
  );
}

