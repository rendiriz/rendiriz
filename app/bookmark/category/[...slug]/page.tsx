import { compareDesc } from 'date-fns';
import { allBookmarks } from 'contentlayer/generated';
import { findCategory } from '@/data/category';
import { findSubCategory } from '@/data/sub-category';
import BookmarkCard from '@/components/bookmark-card';
import NotFound from '@/components/not-found';

interface params {
  params: { slug: string };
}

export const generateMetadata = ({ params }: params) => {
  const category = findCategory(params.slug[0]);
  const subCategory = findSubCategory(params.slug[1]);

  return { title: `${category?.name} - ${subCategory?.name}` };
};

export default function BookmarkSubCategoryPage({ params }: params) {
  const category = findCategory(params.slug[0]);
  const subCategory = findSubCategory(params.slug[1]);

  if (category === undefined || subCategory === undefined) {
    return <NotFound />;
  }

  const pSort = allBookmarks.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  let posts: any[] = [];
  pSort.forEach((post) => {
    if (
      post.category === category?.id &&
      post.subCategory === subCategory?.id
    ) {
      posts.push(post);
    }
  });

  return (
    <div className="w-full mx-auto max-w-3xl pt-6 pb-8 px-4">
      <h1 className="font-serif text-4xl mb-4 md:mb-6 capitalize">
        {category?.name} - {subCategory?.name}
      </h1>

      <div className="grid grid-cols-1 gap-3">
        {posts.length > 0 ? (
          <>
            {posts.map((post, idx) => (
              <BookmarkCard key={idx} {...post} />
            ))}
          </>
        ) : (
          <div>No Data</div>
        )}
      </div>
    </div>
  );
}
