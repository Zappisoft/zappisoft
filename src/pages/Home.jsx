import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../sections/Hero';

const HomeBelowFold = lazy(() => import('./HomeBelowFold.jsx'));

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Zappisoft — Software Built with Precision</title>
        <meta
          name="description"
          content="Developer-led studio building custom websites, web applications, and scalable digital solutions with modern technology."
        />
      </Helmet>

      <Hero />
      <Suspense fallback={null}>
        <HomeBelowFold />
      </Suspense>
    </>
  );
}
