import type { Metadata } from 'next';
import Link from 'next/link';
import { etw } from 'easy-tailwind';
import { sortObj } from '@/libs/sortObj';
import { category } from '@/data/category';
import { subCategory } from '@/data/sub-category';

export const metadata: Metadata = {
  title: 'Bookmark',
  description: 'Bookmark Description',
};

export default function BookmarkCategoryPage() {
  const ctSort = sortObj(category, 'id');
  const scSort = sortObj(subCategory, 'id');

  const bookmarks = ctSort.map((cat: any) => {
    let subCategory: any[] = [];
    scSort.forEach((sub: any) => {
      if (sub.categoryId === cat.id) {
        subCategory.push(sub);
      }
    });

    return {
      ...cat,
      subCategory,
    };
  });

  return (
    <div className="w-full mx-auto max-w-3xl pt-6 pb-8 px-4">
      <h1 className="font-serif text-4xl mb-4 md:mb-6">Bookmark</h1>

      <div className="flex flex-col gap-6">
        {bookmarks.map((bookmark: any) => (
          <div key={bookmark.id}>
            <div className="font-medium text-sm text-neutral-500 mb-3">
              {bookmark.name}
            </div>

            <div className="grid grid-cols-2 gap-3">
              {bookmark.subCategory.map((sub: any, idx: number) => (
                <Link
                  key={sub.id}
                  href={`/bookmark/category/${bookmark.id}/${sub.id}`}
                  className={etw(
                    'block font-medium',
                    'bg-neutral-50 dark:bg-neutral-900',
                    'rounded-md py-3 px-4',
                    {
                      hover: 'bg-neutral-100 dark:bg-neutral-800',
                    },
                  )}
                >
                  {sub.name}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
