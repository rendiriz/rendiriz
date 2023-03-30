import Link from 'next/link';
import { etw } from 'easy-tailwind';
import { Blog } from 'contentlayer/generated';

export default function BlogCard(post: Blog) {
  return (
    <Link
      href={post.url}
      className={etw(
        'block font-medium',
        'bg-neutral-50 dark:bg-neutral-900',
        'rounded-md py-3 px-4',
        {
          hover: 'bg-neutral-100 dark:bg-neutral-800',
        },
      )}
    >
      {post.title}
    </Link>
  );
}
