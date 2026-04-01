import Script from 'next/script';
import '@/styles/fonts.css';
import '@/styles/global.css';

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Zappisoft',
  url: 'https://zappisoft.com',
  description:
    'Developer-led studio building custom websites, web applications, and scalable digital solutions with modern technology.',
  email: 'contact@zappisoft.com',
  sameAs: ['https://www.instagram.com/zappisoft.inc/'],
  serviceType: [
    'Custom Websites',
    'Web Applications',
    'UI/UX Design',
    'Performance Optimization',
    'SEO',
    'Technical Consulting',
    'Mobile App Development',
  ],
};

export const viewport = {
  themeColor: '#0A0A0A',
};

export const metadata = {
  metadataBase: new URL('https://zappisoft.com'),
  title: 'Zappisoft — Software Built with Precision',
  description:
    'Developer-led studio building custom websites, web applications, and scalable digital solutions with modern technology.',
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://zappisoft.com',
    title: 'Zappisoft — Software Built with Precision',
    description:
      'Developer-led studio building custom websites, web applications, and scalable digital solutions.',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zappisoft — Software Built with Precision',
    description:
      'Developer-led studio building custom websites, web applications, and scalable digital solutions.',
    images: ['https://zappisoft.com/og-image.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/inter-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/jetbrains-mono-latin.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="lazyOnload"
            />
            <Script id="ga-init" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
