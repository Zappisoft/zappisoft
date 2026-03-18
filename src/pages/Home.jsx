import { Helmet } from 'react-helmet-async';
import Hero from '../sections/Hero';
import Services from '../sections/Services';
import Work from '../sections/Work';
import WhyZappisoft from '../sections/WhyZappisoft';
import Process from '../sections/Process';
import TechStack from '../sections/TechStack';
import CTA from '../sections/CTA';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Zappisoft — Software Built with Precision</title>
        <meta
          name="description"
          content="Zappisoft is a developer-led studio building custom websites, web applications, and scalable digital solutions with modern technology."
        />
        <meta property="og:title" content="Zappisoft — Software Built with Precision" />
        <meta
          property="og:description"
          content="Developer-led studio building custom websites, web applications, and scalable digital solutions."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zappisoft.com" />
        <meta property="og:image" content="https://zappisoft.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image" content="https://zappisoft.com/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="https://zappisoft.com/og-image.png" />
        <meta name="twitter:title" content="Zappisoft — Software Built with Precision" />
        <meta name="twitter:image" content="https://zappisoft.com/og-image.png" />
        <meta
          name="twitter:description"
          content="Developer-led studio building custom websites, web applications, and scalable digital solutions."
        />
      </Helmet>

      <Hero />
      <Services />
      <Work />
      <WhyZappisoft />
      <Process />
      <TechStack />
      <CTA />
    </>
  );
}
