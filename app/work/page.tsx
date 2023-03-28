import type { Metadata } from 'next';
import { etw } from 'easy-tailwind';
import { site } from '@/libs/site';
import { project } from '@/data/project';
import { portfolio } from '@/data/portfolio';

export const metadata: Metadata = {
  title: 'Work',
  description: `Work ${site.title}`,
};

export default async function WorkPage() {
  return (
    <div className="w-full mx-auto max-w-3xl pt-6 pb-8 px-4">
      <h1 className="font-serif text-4xl mb-4 md:mb-6">Work</h1>

      <div className="flex flex-col gap-6">
        <div>
          <div className="font-medium text-sm text-neutral-500 mb-3">
            Project
          </div>
          <div className="grid grid-cols-1 gap-2">
            {project.map((project: any) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                className={etw('block font-medium rounded-md py-3 px-4', {
                  hover: 'bg-neutral-50 dark:bg-neutral-900',
                })}
              >
                {project.title}
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="font-medium text-sm text-neutral-500 mb-3">
            Portfolio
          </div>
          <div className="grid grid-cols-1 gap-2">
            {portfolio.map((work: any) => (
              <a
                key={work.id}
                href={work.url}
                target="_blank"
                className={etw('block font-medium rounded-md py-3 px-4', {
                  hover: 'bg-neutral-50 dark:bg-neutral-900',
                })}
              >
                {work.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
