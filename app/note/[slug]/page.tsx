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

      <div className="prose dark:prose-invert max-w-none">
        <Content components={{ Image: PostImage }} />
      </div>
    </article>
  );
}
