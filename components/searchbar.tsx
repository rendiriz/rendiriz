'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { etw } from 'easy-tailwind';

export default function Searchbar() {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button
          type="button"
          className={etw(
            'flex items-center justify-between',
            'bg-neutral-50 dark:bg-neutral-900',
            'text-sm text-neutral-500',
            'w-32 rounded-lg py-[10px] px-3',
            {
              hover: 'bg-neutral-100 dark:bg-neutral-800',
              focus: 'outline-none',
              md: 'w-48',
              lg: 'w-64',
            },
          )}
        >
          <span className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 512 512"
            >
              <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path>
            </svg>
            <span className="px-3">Search</span>
          </span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={etw(
            'fixed inset-0 bg-black/50 dark:bg-neutral-800/50',
            'animate-[overlayShow_150ms_cubic-bezier(0.16,_1,_0.3,_1)]',
          )}
        />
        <Dialog.Content
          className={etw(
            'fixed top-[16%] left-1/2 bg-white dark:bg-[#111010]',
            'w-[90vw] max-w-lg max-h-[85vh]',
            'rounded-lg shadow',
            '-translate-x-1/2 -translate-y-1/2',
            'animate-[contentShow_150ms_cubic-bezier(0.16,_1,_0.3,_1)]',
            {
              focus: 'outline-none',
            },
          )}
        >
          <header className="border-b dark:border-neutral-800">
            <div className="flex items-center px-4 text-neutral-500">
              <label className="flex items-center justify-between">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M456.69 421.39L362.6 327.3a173.81 173.81 0 0034.84-104.58C397.44 126.38 319.06 48 222.72 48S48 126.38 48 222.72s78.38 174.72 174.72 174.72A173.81 173.81 0 00327.3 362.6l94.09 94.09a25 25 0 0035.3-35.3zM97.92 222.72a124.8 124.8 0 11124.8 124.8 124.95 124.95 0 01-124.8-124.8z"></path>
                </svg>
              </label>
              <input
                type="text"
                placeholder="Search"
                className={etw(
                  'block w-full bg-white dark:bg-[#111010]',
                  'dark:placeholder-neutral-500',
                  'text-sm text-gray-900 dark:text-white',
                  'focus:ring-0 focus-visible:outline-0',
                  'border-0 rounded-lg py-3 px-2.5',
                )}
              />
            </div>
          </header>
          <div className="space-y-4 p-4">
            <section>
              <p className="mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-10 h-10"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <g transform="translate(0,0)">
                    <path d="M151.7 16.73s-20.6 14.12-22 25.18c-1.4 11.33 17.6 19.24 15.6 30.48-1.3 7.43-16.6 15.38-16.6 15.38s38.7-3.36 42.3-18.3c2.9-11.82-19.8-16.61-23-28.35-2.1-7.94 3.7-24.39 3.7-24.39zm214.4 4.89s-24.8 13.58-24.9 25.45c-.1 7.24 14.4 8.67 14.8 15.9.5 8.56-15.3 20.68-15.3 20.68s33.6-3.81 38.1-16.97c2.7-7.77-9.4-13.81-11.6-21.73-2.1-7.5-1.1-23.33-1.1-23.33zm-106.9.26s-26.9 13.75-24.9 25.45c1.4 7.93 20.6 2.62 21.7 10.6 1.7 13.01-29.6 25.98-29.6 25.98s56.5-1.44 58.8-22.27c1.1-9.88-20-7.79-24.9-16.43-3.9-6.77-1.1-23.33-1.1-23.33zM48 105.6v18h416v-18zm16 37c-14.48 86.9 16.9 138.1 58.6 168.2-3.6-24.8-14.1-49.1-35.06-72.2 39.96 10.5 71.36 48.8 85.36 87.2 2.3-18.8 2.3-27.5 19.5-44.2-3.1 24.8 11.2 26.5 21.2 23.4 25.3-7.9 35.6-39.5 10.6-78.9 47.6 22.7 48.3 48.4 56.3 83.7-2.4-33.2 24.3-46.5 43.7-34-45.1 22.7-8.2 42.2 6.9 47 40 12.8 70-46.3 87.2-91 4.7 19.8.8 39.7-6.5 59.5C441.4 260 459.7 213 448 142.6zm184.3 175.2L75 417.5c2.7 18.4 9 34.4 18.8 48.5l92-44.1-78.7 59.9c3.4 3.4 7.1 6.6 11 9.7l74.7-42.9c0-.7-.1-1.5-.1-2.2 0-37.2 30.5-67.6 67.8-67.6 10.6 0 20.6 2.4 29.5 6.7-2.4-13.4-7.3-27.1-14.8-39.2l-94.9 40.1 82.5-56.5c-4.4-4.5-9.2-8.6-14.5-12.1zm58.9 57.6c1.6 7.2 2.6 14.4 3 21.4l.2 3.9c11.1 12 17.9 28.1 17.9 45.7 0 7.8-1.3 15.3-3.8 22.2l91.4 24.4c4.6-6.3 8.6-12.8 11.8-19.4l-63.1-24.7 70.1 6.9c.9-3 1.6-5.9 2.2-8.9l-97.1-34.3 99.2 15.5c.2-5.8-.1-11.7-.8-17.7zm-46.7 22.1c-27.2 0-49.1 21.8-49.1 48.9 0 27.1 21.9 48.9 49.1 48.9 27.3 0 49.2-21.8 49.2-48.9 0-27.1-21.9-48.9-49.2-48.9zm-4.9 11.8c43.8 0 58.4 71.6 0 71.6 26.6-23.1 29.8-46.9 0-71.6zm.2 9.8c-21.6 17.9-19.3 35.2 0 52-42.4 0-31.8-52 0-52z"></path>
                  </g>
                </svg>
              </p>
              <p>Something new is cooking</p>
            </section>
            {/* <section>
              <div className="font-medium text-sm mb-2">Blog</div>
              <div className="space-y-2">
                <a
                  href="#"
                  className={etw(
                    'block bg-neutral-50 dark:bg-neutral-900',
                    'font-medium rounded-md py-3 px-4',
                    {
                      hover: 'bg-neutral-100 dark:bg-neutral-800',
                    },
                  )}
                >
                  Professionally expedite focused
                </a>

                <a
                  href="#"
                  className={etw(
                    'block bg-neutral-50 dark:bg-neutral-900',
                    'font-medium rounded-md py-3 px-4',
                    {
                      hover: 'bg-neutral-100 dark:bg-neutral-800',
                    },
                  )}
                >
                  Globally parallel task
                </a>
              </div>
            </section>

            <section>
              <div className="font-medium text-sm mb-2">Note</div>
            </section>

            <section>
              <div className="font-medium text-sm mb-2">Bookmark</div>
            </section> */}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
