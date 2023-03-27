import type { Metadata } from 'next';
import Image from 'next/image';
import { site } from '@/libs/site';

export const metadata: Metadata = {
  description: site.description,
};

export default function HomePage() {
  return (
    <div className="w-full mx-auto max-w-3xl pt-6 pb-8 px-4">
      <h1 className="group inline-flex items-center font-serif text-4xl mb-4 md:mb-6">
        Rendi Riz
        <a
          className="hidden ml-3 group-hover:block"
          href="https://resume.showwcase.com/rendiriz.pdf"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 512 512"
          >
            <path
              d="M200.66 352H144a96 96 0 010-192h55.41M312.59 160H368a96 96 0 010 192h-56.66M169.07 256h175.86"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="48"
            ></path>
          </svg>
        </a>
      </h1>
      <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-8">
        <div className="flex-shrink-0">
          <Image
            className="rounded-full"
            src="/rendiriz.png"
            width={100}
            height={100}
            alt="Rendi Riz"
          />
        </div>
        <div>
          <p className="mb-2">
            Hey, I&apos;m Rendi. I&apos;m Front-end Engineer with interest in
            modern web development. Currently working at Jabar Digital Service
            in Bandung, Indonesia.
          </p>
          <p className="mb-2">
            If you have any exciting projects to talk about, or just want to be
            friends, feel free to hit me up.
          </p>
        </div>
      </div>
    </div>
  );
}
