'use client';

import { useState } from 'react';
import Link from 'next/link';
import { etw } from 'easy-tailwind';
import * as Collapsible from '@radix-ui/react-collapsible';
import { site } from '@/libs/site';
import Searchbar from '@/components/searchbar';
import NavbarItem from '@/components/navbar-item';
import NavbarItemMobile from '@/components/navbar-item-mobile';
import ThemeSwitcher from '@/components/theme-switcher';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <Collapsible.Root open={open} onOpenChange={setOpen}>
      <nav className="bg-white dark:bg-[#111010]">
        <div
          className={etw(
            'relative flex flex-wrap items-center justify-between',
            'w-full mx-auto max-w-3xl py-4 px-4',
            {
              md: 'py-6',
            },
          )}
        >
          <div className="flex items-center">
            <Link
              href="/"
              className="text-xl text-gray-800 no-underline whitespace-nowrap"
              aria-label={site.title}
            >
              <svg
                className="w-auto h-8 fill-black dark:fill-white"
                viewBox="0 0 75 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="75"
                  y="20"
                  width="20"
                  height="75"
                  transform="rotate(90 75 20)"
                ></rect>
                <rect x="10" width="20" height="100"></rect>
              </svg>
            </Link>

            <div className="ml-6">
              <Searchbar />
            </div>
          </div>

          <div className="flex items-center space-x-1 md:space-x-2">
            <Collapsible.Trigger asChild>
              <button
                type="button"
                className={etw(
                  'sm:hidden',
                  'inline-flex rounded-lg p-2.5',
                  'text-sm text-neutral-500',
                  {
                    hover: 'bg-neutral-100 dark:bg-neutral-800',
                  },
                )}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeMiterlimit="10"
                    strokeWidth="48"
                    d="M88 152h336M88 256h336M88 360h336"
                  ></path>
                </svg>
                <span className="sr-only">Open main menu</span>
              </button>
            </Collapsible.Trigger>

            <NavbarItem href="/work" text="Work">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M16 352a48.05 48.05 0 0048 48h133.88l-4 32H144a16 16 0 000 32h224a16 16 0 000-32h-49.88l-4-32H448a48.05 48.05 0 0048-48v-48H16zm240-16a16 16 0 11-16 16 16 16 0 0116-16zM496 96a48.05 48.05 0 00-48-48H64a48.05 48.05 0 00-48 48v192h480z"></path>
              </svg>
              <span className="sr-only">Rendi Riz Work</span>
            </NavbarItem>

            <NavbarItem href="/blog" text="Blog">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M202.24 74C166.11 56.75 115.61 48.3 48 48a31.36 31.36 0 00-17.92 5.33A32 32 0 0016 79.9V366c0 19.34 13.76 33.93 32 33.93 71.07 0 142.36 6.64 185.06 47a4.11 4.11 0 006.94-3V106.82a15.89 15.89 0 00-5.46-12A143 143 0 00202.24 74zM481.92 53.3A31.33 31.33 0 00464 48c-67.61.3-118.11 8.71-154.24 26a143.31 143.31 0 00-32.31 20.78 15.93 15.93 0 00-5.45 12v337.13a3.93 3.93 0 006.68 2.81c25.67-25.5 70.72-46.82 185.36-46.81a32 32 0 0032-32v-288a32 32 0 00-14.12-26.61z"></path>
              </svg>
              <span className="sr-only">Rendi Riz Blog</span>
            </NavbarItem>

            <NavbarItem href="/note" text="Note">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M428 224H288a48 48 0 01-48-48V36a4 4 0 00-4-4h-92a64 64 0 00-64 64v320a64 64 0 0064 64h224a64 64 0 0064-64V228a4 4 0 00-4-4z"></path>
                <path d="M419.22 188.59L275.41 44.78a2 2 0 00-3.41 1.41V176a16 16 0 0016 16h129.81a2 2 0 001.41-3.41z"></path>
              </svg>
              <span className="sr-only">Rendi Riz Note</span>
            </NavbarItem>

            <NavbarItem href="/bookmark" text="Bookmark">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 512 512"
              >
                <path d="M400 480a16 16 0 01-10.63-4L256 357.41 122.63 476A16 16 0 0196 464V96a64.07 64.07 0 0164-64h192a64.07 64.07 0 0164 64v368a16 16 0 01-16 16z"></path>
              </svg>
              <span className="sr-only">Rendi Riz Bookmark</span>
            </NavbarItem>

            <ThemeSwitcher />
          </div>
        </div>
      </nav>

      <Collapsible.Content>
        <div
          className={etw(
            'absolute w-full',
            'bg-white dark:bg-[#111010]',
            'border-b border-neutral-100 dark:border-neutral-800',
            'mt-[1px] pb-3',
          )}
        >
          <div className="flex flex-col">
            <NavbarItemMobile href="/work" text="Work" />
            <NavbarItemMobile href="/blog" text="Blog" />
            <NavbarItemMobile href="/note" text="Note" />
            <NavbarItemMobile href="/bookmark" text="Bookmark" />
          </div>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
}
