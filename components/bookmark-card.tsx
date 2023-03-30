import Link from 'next/link';
import { etw } from 'easy-tailwind';
import { Bookmark } from 'contentlayer/generated';

export default function BookmarkCard(post: Bookmark) {
  switch (post.kind) {
    case 'website':
      return (
        <a
          href={post.link}
          target="_blank"
          rel="noreferrer"
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
        </a>
      );
    default:
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
}
