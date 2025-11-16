import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://your-domain.vercel.app';
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/admin/',
          '/admin-login/',
          '/api/',
          '/debug-pages/',
          '/test-page-connection/',
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

