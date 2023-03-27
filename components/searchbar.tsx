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
            'fixed top-1/3 left-1/2 bg-white dark:bg-[#111010]',
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
            <p>Something new is cooking</p>
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
