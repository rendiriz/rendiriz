import './globals.css';
import cn from 'classnames';
import { Partytown } from '@builder.io/partytown/react';
import { site } from '@/libs/site';
import { atkinson, marcellus, robotoMono } from '@/libs/fonts';
import Provider from '@/components/provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

interface Props {
  readonly children: React.ReactNode;
}

export const metadata = {
  icons: {
    icon: '/favicon.svg',
  },
  title: {
    default: site.title,
    template: `%s — ${site.title}`,
  },
};

export default function RootLayout({ children }: Props) {
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

        <Partytown debug={false} forward={['dataLayer.push']} />
        <script
          async
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
      </body>
    </html>
  );
}
