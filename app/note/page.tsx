import type { Metadata } from 'next';
import { compareDesc } from 'date-fns';
import { allNotes } from 'contentlayer/generated';
import NoteCard from '@/components/note-card';

export const metadata: Metadata = {
  title: 'Note',
  description: 'Note Description',
};

export default function NotePage() {
  const posts = allNotes.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

  return (
    <div className="w-full mx-auto max-w-3xl pt-6 pb-8 px-4">
      <h1 className="font-serif text-4xl mb-4 md:mb-6">Note</h1>

      <div className="grid grid-cols-1 gap-3">
        {posts.map((post, idx) => (
          <NoteCard key={idx} {...post} />
        ))}
      </div>
    </div>
  );
}
