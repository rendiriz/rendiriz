import './globals.css';
import Script from 'next/script';
import { Marcellus, Roboto_Mono } from 'next/font/google';
import localFont from 'next/font/local';
import cn from 'classnames';
import { site } from '@/libs/site';
import Provider from '@/components/provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

const atkinson = localFont({
  src: [
    {
      path: '../font/Atkinson-Hyperlegible-Regular-102a.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../font/Atkinson-Hyperlegible-Italic-102a.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../font/Atkinson-Hyperlegible-Bold-102a.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../font/Atkinson-Hyperlegible-BoldItalic-102a.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-atkinson',
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
      className={cn([
        atkinson.variable,
        marcellus.variable,
        robotoMono.variable,
      ])}
    >
      <body>
        <Provider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Provider>

        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.PUBLIC_GA_TRACKING_ID}`}
          strategy="worker"
        />
        <Script
          id="partytown-config"
          data-partytown-config
          dangerouslySetInnerHTML={{
            __html: `
              partytown = {
                lib: "/_next/static/~partytown/",
                forward: ["gtag"]
              };
            `,
          }}
        />
        <Script
          id="partytown-analytics"
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              window.gtag = function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${process.env.PUBLIC_GA_TRACKING_ID}', { 
                page_path: window.location.pathname,
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
