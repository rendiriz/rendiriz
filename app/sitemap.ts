import type { MetadataRoute } from 'next';
import { allBlogs, allNotes, allBookmarks } from 'contentlayer/generated';
import { removeSlug } from '@/libs/removeSlug';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.PUBLIC_SITE_URL as string;

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/note`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/bookmark`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/work`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  const blogRoutes: MetadataRoute.Sitemap = allBlogs.map((post) => ({
    url: `${baseUrl}/blog/${removeSlug(post._raw.flattenedPath)}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const noteRoutes: MetadataRoute.Sitemap = allNotes.map((post) => ({
    url: `${baseUrl}/note/${removeSlug(post._raw.flattenedPath)}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const bookmarkRoutes: MetadataRoute.Sitemap = allBookmarks.map((post) => ({
    url: `${baseUrl}/bookmark/${removeSlug(post._raw.flattenedPath)}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [...staticRoutes, ...blogRoutes, ...noteRoutes, ...bookmarkRoutes];
}
