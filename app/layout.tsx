import './globals.css';
import cn from 'classnames';
import { Inter, Marcellus, Roboto_Mono } from 'next/font/google';
import { site } from '@/libs/site';
import Provider from '@/components/provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const inter = Inter({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-inter',
});

const marcellus = Marcellus({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-marcellus',
});

const robotoMono = Roboto_Mono({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  variable: '--font-roboto-mono',
});

export const metadata = {
  icons: {
    icon: '/favicon.svg',
  },
  title: {
    default: site.title,
    template: `%s — ${site.title}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn([inter.variable, marcellus.variable, robotoMono.variable])}
    >
      <body>
        <Provider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
