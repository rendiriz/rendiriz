'use client';

import { Fragment, useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import * as Dialog from '@radix-ui/react-dialog';
import { etw } from 'easy-tailwind';
import { insertBatch, search } from '@lyrasearch/lyra';
import Mark from 'mark.js';
import {
  instanceBlog,
  instanceNote,
  instanceBookmark,
  makeDataBlog,
  makeDataNote,
  makeDataBookmark,
} from '@/libs/lyra';

const { documents: documentsBlog } = makeDataBlog();
const { documents: documentsNote } = makeDataNote();
const { documents: documentsBookmark } = makeDataBookmark();

export default function Searchbar() {
  const [open, setOpen] = useState(false);
  const contentAreaRef = useRef<any>(null);
  const [searchTerm, setSearch] = useState('');
  const [filteredBlog, setFilteredBlog] = useState<any>([]);
  const [filteredNote, setFilteredNote] = useState<any>([]);
  const [filteredBookmark, setFilteredBookmark] = useState<any>([]);
  const markRef = useRef<any>(null);
  const lyraBlogRef = useRef(instanceBlog());
  const lyraNoteRef = useRef(instanceNote());
  const lyraBookmarkRef = useRef(instanceBookmark());

  const blogDB = lyraBlogRef.current;
  const noteDB = lyraNoteRef.current;
  const bookmarkDB = lyraBookmarkRef.current;

  useEffect(() => {
    async function insertData(instance: any, documents: any) {
      await insertBatch(await instance, documents, { batchSize: 500 });
    }

    insertData(lyraBlogRef.current, documentsBlog);
    insertData(lyraNoteRef.current, documentsNote);
    insertData(lyraBookmarkRef.current, documentsBookmark);

    return () => {
      lyraBlogRef.current = instanceBlog();
      lyraNoteRef.current = instanceNote();
      lyraBookmarkRef.current = instanceBookmark();
    };
  }, []);

  useEffect(() => {
    markRef.current = new Mark(contentAreaRef.current);
  }, []);

  useEffect(() => {
    if (!searchTerm.trim().length) {
      setFilteredBlog([]);
      setFilteredNote([]);
      setFilteredBookmark([]);
      markRef.current.unmark();
      return;
    }

    async function searchData(db: any, options: any) {
      return await search(await db, options);
    }

    async function resultData(data: any) {
      return await Promise.all(data);
    }

    const searchBlog = searchData(blogDB, {
      term: searchTerm,
      properties: ['title'],
      tolerance: 3,
      limit: 5,
    });

    const searchNote = searchData(noteDB, {
      term: searchTerm,
      properties: ['title'],
      tolerance: 3,
      limit: 5,
    });

    const searchBookmark = searchData(bookmarkDB, {
      term: searchTerm,
      properties: ['title'],
      tolerance: 3,
      limit: 5,
    });

    const results = resultData([searchBlog, searchNote, searchBookmark]);

    results.then((data) => {
      setFilteredBlog(data[0]); //blog
      setFilteredNote(data[1]); //note
      setFilteredBookmark(data[2]); //bookmark
    });

    markRef.current = new Mark(contentAreaRef.current);
    markRef.current.unmark({
      done: () => {
        markRef.current.mark(searchTerm);
      },
    });
  }, [searchTerm, blogDB, noteDB, bookmarkDB]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
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
            'fixed z-[1] top-[10%] left-1/2 bg-white dark:bg-[#111010]',
            'w-[90vw] max-w-xl max-h-[85vh]',
            'rounded-lg shadow',
            '-translate-x-1/2',
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
                value={searchTerm}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </header>
          <div
            ref={contentAreaRef}
            id="search-result"
            className="space-y-4 p-4"
          >
            <Fragment>
              {filteredBlog && filteredBlog.count > 0 ? (
                <section>
                  <div className="font-medium text-sm text-neutral-500 mb-2">
                    Blog
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {filteredBlog.hits.map((post: any, idx: number) => (
                      <Link
                        key={idx}
                        href={post.document.url}
                        className={etw(
                          'block font-medium',
                          'bg-neutral-50 dark:bg-neutral-900',
                          'rounded-md py-3 px-4',
                          {
                            hover: 'bg-neutral-100 dark:bg-neutral-800',
                          },
                        )}
                        onClick={() => setOpen(false)}
                      >
                        {post.document.title}
                      </Link>
                    ))}
                  </div>
                </section>
              ) : null}
            </Fragment>

            <Fragment>
              {filteredNote && filteredNote.count > 0 ? (
                <section>
                  <div className="font-medium text-sm text-neutral-500 mb-2">
                    Note
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {filteredNote.hits.map((post: any, idx: number) => (
                      <Link
                        key={idx}
                        href={post.document.url}
                        className={etw(
                          'block font-medium',
                          'bg-neutral-50 dark:bg-neutral-900',
                          'rounded-md py-3 px-4',
                          {
                            hover: 'bg-neutral-100 dark:bg-neutral-800',
                          },
                        )}
                        onClick={() => setOpen(false)}
                      >
                        {post.document.title}
                      </Link>
                    ))}
                  </div>
                </section>
              ) : null}
            </Fragment>

            <Fragment>
              {filteredBookmark && filteredBookmark.count > 0 ? (
                <section>
                  <div className="font-medium text-sm text-neutral-500 mb-2">
                    Bookmark
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {filteredBookmark.hits.map((post: any, idx: number) => (
                      <Fragment key={idx}>
                        {(() => {
                          switch (post.document.kind) {
                            case 'website':
                              return (
                                <a
                                  href={post.document.link}
                                  target="_blank"
                                  rel="noreferrer"
                                  className={etw(
                                    'block font-medium',
                                    'bg-neutral-50 dark:bg-neutral-900',
                                    'rounded-md py-3 px-4',
                                    {
                                      hover:
                                        'bg-neutral-100 dark:bg-neutral-800',
                                    },
                                  )}
                                  onClick={() => setOpen(false)}
                                >
                                  {post.document.title}
                                </a>
                              );
                            default:
                              return (
                                <Link
                                  href={post.document.url}
                                  className={etw(
                                    'block font-medium',
                                    'bg-neutral-50 dark:bg-neutral-900',
                                    'rounded-md py-3 px-4',
                                    {
                                      hover:
                                        'bg-neutral-100 dark:bg-neutral-800',
                                    },
                                  )}
                                  onClick={() => setOpen(false)}
                                >
                                  {post.document.title}
                                </Link>
                              );
                          }
                        })()}
                      </Fragment>
                    ))}
                  </div>
                </section>
              ) : null}
            </Fragment>
          </div>
          <footer
            className={etw(
              'flex justify-end',
              'text-xs border-t dark:border-neutral-800',
              'py-3 px-2.5',
            )}
          >
            {`Search by `}
            <span
              className={etw(
                'bg-clip-text bg-gradient-to-r from-[#08B5FF] to-[#F101E8]',
                'ml-1',
              )}
            >
              Lyra
            </span>
          </footer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
