import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Note',
  description: 'Note Description',
};

export default function NotePage() {
  return (
    <div className="w-full mx-auto max-w-3xl pt-6 pb-8 px-4">
      <h1 className="font-serif text-4xl mb-4 md:mb-6">Note</h1>
      <p>Something new is cooking</p>
    </div>
  );
}
