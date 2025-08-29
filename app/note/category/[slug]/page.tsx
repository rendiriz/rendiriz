import type { Metadata } from 'next';
import { compareDesc } from 'date-fns';
import { allNotes, Note } from 'contentlayer/generated';
import NoteCard from '@/components/note-card';
import NotFound from '@/components/not-found';

interface Params {
  params: { slug: string };
}

const toSlug = (s: string) => s.trim().toLowerCase().replace(/\s+/g, '-');
const fromSlug = (s: string) => s.replace(/-/g, ' ');

export const generateStaticParams = async () => {
  const set = new Set<string>();
  allNotes.forEach((n) => {
    if (!n.category) return;
    n.category
      .split(',')
      .map((c) => toSlug(c))
      .forEach((c) => set.add(c));
  });
  return Array.from(set).map((slug) => ({ slug }));
};

export const generateMetadata = ({ params }: Params): Metadata => {
  return { title: `Note Category: ${fromSlug(params.slug)}` };
};

export default function NoteCategoryPage({ params }: Params) {
  const slug = params.slug;

  const postsSorted = allNotes.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  const posts = postsSorted.filter((post: Note) => {
    if (!post.category) return false;
    const categories = post.category
      .split(',')
      .map((c) => toSlug(c));
    return categories.includes(slug);
  });

  if (posts.length === 0) {
    return <NotFound />;
  }

  return (
    <div className="w-full mx-auto max-w-3xl pt-6 pb-8 px-4">
      <h1 className="font-serif text-4xl mb-4 md:mb-6 capitalize">
        {fromSlug(slug)}
      </h1>

      <div className="grid grid-cols-1 gap-3">
        {posts.map((post, idx) => (
          <NoteCard key={idx} {...post} />
        ))}
      </div>
    </div>
  );
}

