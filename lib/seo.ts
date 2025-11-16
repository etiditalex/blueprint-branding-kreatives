import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  keywords?: string[];
}

export function generateSEOMetadata({
  title,
  description,
  image,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author,
  keywords = [],
}: SEOProps): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.vercel.app';
  const siteName = 'Blueprint Branding Kreatives';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const pageUrl = url || siteUrl;
  const ogImage = image || `${siteUrl}/og-image.jpg`;

  const metadata: Metadata = {
    title: fullTitle,
    description,
    keywords: keywords.length > 0 ? keywords : undefined,
    openGraph: {
      type,
      url: pageUrl,
      title: fullTitle,
      description,
      siteName,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    alternates: {
      canonical: pageUrl,
    },
  };

  return metadata;
}

// Structured Data (JSON-LD) helpers
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Blueprint Branding Kreatives',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.vercel.app',
    logo: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.vercel.app'}/logo.png`,
    description: 'A digital marketing and brand development company providing creative solutions to make your brand memorable, trusted, and reliable.',
    sameAs: [
      // Add your social media URLs here
      // 'https://www.facebook.com/yourpage',
      // 'https://www.twitter.com/yourhandle',
      // 'https://www.instagram.com/yourhandle',
      // 'https://www.linkedin.com/company/yourcompany',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      // Add contact information
    },
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Blueprint Branding Kreatives',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.vercel.app',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.vercel.app'}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateArticleSchema({
  title,
  description,
  image,
  url,
  publishedTime,
  modifiedTime,
  author,
}: {
  title: string;
  description: string;
  image?: string;
  url: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.vercel.app';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: image || `${siteUrl}/og-image.jpg`,
    url,
    datePublished: publishedTime,
    dateModified: modifiedTime || publishedTime,
    author: {
      '@type': 'Organization',
      name: author || 'Blueprint Branding Kreatives',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Blueprint Branding Kreatives',
      logo: {
        '@type': 'ImageObject',
        url: `${siteUrl}/logo.png`,
      },
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateServiceSchema({
  name,
  description,
  provider,
  areaServed,
  serviceType,
}: {
  name: string;
  description: string;
  provider?: string;
  areaServed?: string;
  serviceType?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider || 'Blueprint Branding Kreatives',
    },
    areaServed: areaServed || 'Worldwide',
    serviceType,
  };
}

