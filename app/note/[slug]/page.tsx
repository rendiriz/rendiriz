import { removeSlug } from '@/libs/removeSlug';
import { format, parseISO } from 'date-fns';
import { allNotes, Note } from 'contentlayer/generated';
import { getMDXComponent } from 'next-contentlayer/hooks';
import PostImage from '@/components/post-image';
import NotFound from '@/components/not-found';

interface params {
  params: { slug: string };
}

export const generateStaticParams = async () =>
  allNotes.map((post) => {
    return { slug: removeSlug(post._raw.flattenedPath) };
  });

export const generateMetadata = ({ params }: params) => {
  const post = allNotes.find(
    (post) => removeSlug(post._raw.flattenedPath) === params.slug,
  ) as Note;

  if (post === undefined) {
    return { title: '404' };
  }

  return { title: post.title };
};

export default function NoteDetailPage({ params }: params) {
  const post = allNotes.find(
    (post) => removeSlug(post._raw.flattenedPath) === params.slug,
  ) as Note;

  if (post === undefined) {
    return <NotFound />;
  }

  const Content = getMDXComponent(post.body.code);

  return (
    <article className="w-full mx-auto max-w-3xl pt-6 pb-8 px-4">
      <div className="mb-4 md:mb-6">
        <h1 className="font-serif text-4xl mb-1">{post.title}</h1>

        <time dateTime={post.date} className="mb-1 text-sm text-neutral-500">
          {format(parseISO(post.date), 'LLLL d, yyyy')}
        </time>
      </div>

      <div
        className={
          'prose prose-neutral dark:prose-invert max-w-none' +
          ' prose-headings:scroll-mt-24 prose-h2:mt-8 prose-h3:mt-6' +
          ' prose-a:text-blue-600 dark:prose-a:text-blue-400 hover:prose-a:underline' +
          ' prose-img:rounded-lg' +
          ' prose-ul:my-3 prose-ol:my-3 prose-li:my-1 prose-ul:pl-5 prose-ol:pl-5' +
          ' prose-code:text-pink-600 dark:prose-code:text-pink-400 prose-code:rounded prose-code:before:content-[none] prose-code:after:content-[none]' +
          ' prose-pre:bg-neutral-900 prose-pre:text-neutral-100 dark:prose-pre:bg-neutral-900 prose-pre:rounded-lg prose-pre:p-4 prose-pre:shadow-sm' +
          ' prose-blockquote:border-l-4 prose-blockquote:border-neutral-300 dark:prose-blockquote:border-neutral-700 prose-blockquote:pl-4' +
          ' prose-hr:border-neutral-200 dark:prose-hr:border-neutral-800'
        }
      >
        <Content components={{ Image: PostImage }} />
      </div>
    </article>
  );
}
