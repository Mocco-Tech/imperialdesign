import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        crawlDelay: 10,
      },
      {
        userAgent: ['Applebot', 'Bingbot'],
        allow: ['/'],
      },
      {
        userAgent: 'GPTBot',
        disallow: ['/'],
      },
    ],
    sitemap: 'https://imperialdesign.com.ua/sitemap.xml',
  };
}
