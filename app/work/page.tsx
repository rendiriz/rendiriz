import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Project & Work',
  description: 'Project & Work Description',
};

export default function WorkPage() {
  return (
    <div className="w-full mx-auto max-w-3xl pt-6 pb-8 px-4">
      <h1 className="font-serif text-4xl mb-4 md:mb-6">Project & Work</h1>
      <p>Something new is cooking</p>
    </div>
  );
}
