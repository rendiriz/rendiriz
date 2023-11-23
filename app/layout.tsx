/* eslint-disable @next/next/no-sync-scripts */
import './globals.css';
import Script from 'next/script';
import cn from 'classnames';
import { Partytown } from '@builder.io/partytown/react';
import { site } from '@/libs/site';
import { atkinson, marcellus, robotoMono } from '@/libs/fonts';
import Provider from '@/components/provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

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

        <Partytown debug={true} forward={['dataLayer.push']} />
        <script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.PUBLIC_GA_TRACKING_ID}`}
          type="text/partytown"
        />
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', '${process.env.PUBLIC_GA_TRACKING_ID}');
            `,
          }}
        />

        {/* <Script
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
        /> */}
      </body>
    </html>
  );
}
