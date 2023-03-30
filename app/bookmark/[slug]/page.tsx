import { format, parseISO } from 'date-fns';
import { allBookmarks, Bookmark } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';
import { removeSlug } from '@/libs/removeSlug';
import StaticTweet from '@/components/static-tweet';
import NotFound from '@/components/not-found';

interface params {
  params: { slug: string };
}

export const generateStaticParams = async () =>
  allBookmarks.map((post) => {
    return { slug: removeSlug(post._raw.flattenedPath) };
  });

export const generateMetadata = ({ params }: params) => {
  const post = allBookmarks.find(
    (post) => removeSlug(post._raw.flattenedPath) === params.slug,
  ) as Bookmark;

  if (post === undefined) {
    return { title: '404' };
  }

  const title = post.title;
  const length = 55;
  const result = title.slice(0, length) + (title.length > length ? '...' : '');

  return { title: result };
};

export default function BookmarkDetailPage({ params }: params) {
  const post = allBookmarks.find(
    (post) => removeSlug(post._raw.flattenedPath) === params.slug,
  ) as Bookmark;

  if (post === undefined) {
    return <NotFound />;
  }

  const Content = getMDXComponent(post.body.code);

  const renderLayout = (type: string) => {
    switch (type) {
      case 'tweet':
        return <Content components={{ StaticTweet }} />;
      default:
        return (
          <>
            <div className="mb-4 md:mb-6">
              <h1 className="font-serif text-4xl mb-1">{post.title}</h1>

              <time
                dateTime={post.date}
                className="mb-1 text-sm text-neutral-500"
              >
                {format(parseISO(post.date), 'LLLL d, yyyy')}
              </time>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <Content components={{ StaticTweet }} />
            </div>
          </>
        );
    }
  };

  return (
    <article className="w-full mx-auto max-w-3xl pt-6 pb-8 px-4">
      {renderLayout(post.kind)}
    </article>
  );
}
