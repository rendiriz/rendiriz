import type { Metadata } from 'next';
import { compareDesc } from 'date-fns';
import { allBlogs } from 'contentlayer/generated';
import BlogCard from '@/components/blog-card';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Blog Description',
};

export default function BlogPage() {
  const posts = allBlogs.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <div className="w-full mx-auto max-w-3xl pt-6 pb-8 px-4">
      <h1 className="font-serif text-4xl mb-4 md:mb-6">Blog</h1>

      <div className="grid grid-cols-1 gap-3">
        {posts.map((post, idx) => (
          <BlogCard key={idx} {...post} />
        ))}
      </div>
    </div>
  );
}
