import { etw } from 'easy-tailwind';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Work Description',
};

async function getProject() {
  const res = await fetch(`${process.env.PUBLIC_SITE_URL}api/project`);
  return res.json();
}

async function getPortfolio() {
  const res = await fetch(`${process.env.PUBLIC_SITE_URL}api/portfolio`);
  return res.json();
}

export default async function WorkPage() {
  const projectData = getProject();
  const portfolioData = getPortfolio();

  const [project, portfolio] = await Promise.all([projectData, portfolioData]);

  return (
    <div className="w-full mx-auto max-w-3xl pt-6 pb-8 px-4">
      <h1 className="font-serif text-4xl mb-4 md:mb-6">Work</h1>

      <div className="flex flex-col gap-6">
        <div>
          <div className="font-medium text-sm text-neutral-500 mb-3">
            Project
          </div>
          <div className="grid grid-cols-1 gap-2">
            {project.data.map((project: any) => (
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
            {portfolio.data.map((work: any) => (
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
