import type { MetadataRoute } from 'next';

const BASE_URL = 'https://leonardo-wilis-portfolio.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: BASE_URL,
    },
  ];
}
