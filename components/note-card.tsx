import Link from 'next/link';
import { etw } from 'easy-tailwind';
import { Note } from 'contentlayer/generated';

const toSlug = (s: string) => s.trim().toLowerCase().replace(/\s+/g, '-');

export default function NoteCard(post: Note) {
  const categories = (post.category || '')
    .split(',')
    .map((c) => c.trim())
    .filter(Boolean);

  return (
    <div
      className={etw(
        'block',
        'bg-neutral-50 dark:bg-neutral-900',
        'rounded-md py-3 px-4',
        {
          hover: 'bg-neutral-100 dark:bg-neutral-800',
        },
      )}
    >
      <div className="flex items-center gap-3">
        <Link
          href={post.url}
          className={etw('font-medium', 'block', 'flex-1 min-w-0')}
        >
          {post.title}
        </Link>

        {categories.length > 0 && (
          <div className="ml-auto flex flex-wrap gap-2 shrink-0 justify-end">
            {categories.map((cat) => (
              <Link
                key={cat}
                href={`/note/category/${toSlug(cat)}`}
                className={etw(
                  'inline-flex items-center rounded-md',
                  'bg-neutral-200 text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200',
                  'text-xs px-2 py-0.5',
                  {
                    hover: 'bg-neutral-300 dark:bg-neutral-700',
                  },
                )}
              >
                {cat}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
