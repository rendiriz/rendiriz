import { Marcellus, Roboto_Mono } from 'next/font/google';
import localFont from 'next/font/local';

export const atkinson = localFont({
  src: [
    {
      path: '../fonts/Atkinson-Hyperlegible-Regular-102a.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Atkinson-Hyperlegible-Italic-102a.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/Atkinson-Hyperlegible-Bold-102a.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Atkinson-Hyperlegible-BoldItalic-102a.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-atkinson',
  display: 'swap',
});

export const marcellus = Marcellus({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-marcellus',
  display: 'swap',
});

export const robotoMono = Roboto_Mono({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});
