import { site } from '@/libs/site';
import { etw } from 'easy-tailwind';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full mx-auto max-w-3xl p-4">
      <div className="text-sm text-neutral-500 space-y-1">
        <div
          className={etw('flex flex-col-reverse justify-between', 'gap-1', {
            md: 'flex-row items-center',
          })}
        >
          <div>
            <a
              className={etw({
                hover: 'underline text-black dark:text-white',
              })}
              href="mailto:rendirizkir@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              rendirizkir@gmail.com
            </a>
          </div>
          <div>Let&apos;s work together</div>
        </div>
        <div
          className={etw(
            'flex flex-col-reverse justify-between',
            'font-mono text-xs gap-1',
            {
              md: 'flex-row items-center',
            },
          )}
        >
          <div>
            <a
              className={etw({
                hover: 'underline text-black dark:text-white',
              })}
              href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
              target="_blank"
              rel="noreferrer"
            >
              CC BY-NC-SA 4.0
            </a>{' '}
            {year} <span className="font-sans">©</span> Rendi Riz.
          </div>
          <div className="space-x-3">
            <a
              className={etw({
                hover: 'underline text-black dark:text-white',
              })}
              href={`https://github.com/${site.github}`}
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>

            <a
              className={etw({
                hover: 'underline text-black dark:text-white',
              })}
              href={`https://www.linkedin.com/in/${site.linkedin}`}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
