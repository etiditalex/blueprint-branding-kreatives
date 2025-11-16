import { NextRequest, NextResponse } from 'next/server';
import { createServerClient } from '../../../../../backend/lib/supabase';
import { blogPosts } from '@/lib/siteConfig';

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerClient();
    const syncedPosts = [];
    const skippedPosts = [];

    for (const post of blogPosts) {
      // Check if post already exists by slug
      const { data: existing } = await supabase
        .from('blog_posts')
        .select('id')
        .eq('slug', post.slug)
        .single();

      if (existing) {
        skippedPosts.push({ slug: post.slug, reason: 'Already exists' });
        continue;
      }

      // Convert content array to string if needed
      const content = Array.isArray(post.content) 
        ? post.content.join('\n\n') 
        : (post.content || '');

      // Parse date
      const publishedDate = post.date ? new Date(post.date) : new Date();

      // Create the blog post
      const { data, error } = await supabase
        .from('blog_posts')
        .insert([{
          title: post.title,
          slug: post.slug,
          excerpt: post.excerpt || '',
          content: content,
          category: post.category || 'General',
          author: post.author || 'Blueprint Team',
          image_url: post.image || null,
          published: true,
          published_at: publishedDate.toISOString(),
        }])
        .select()
        .single();

      if (error) {
        skippedPosts.push({ slug: post.slug, reason: error.message });
        continue;
      }

      syncedPosts.push(data);
    }

    return NextResponse.json({
      success: true,
      synced: syncedPosts.length,
      skipped: skippedPosts.length,
      syncedPosts,
      skippedPosts,
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
      staticPosts: blogPosts.map(p => ({ slug: p.slug, title: p.title })),
      total: blogPosts.length,
    }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Internal server error', details: error.message },
      { status: 500 }
    );
  }
}

