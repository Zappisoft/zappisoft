import Services from '../sections/Services';
import Work from '../sections/Work';
import WhyZappisoft from '../sections/WhyZappisoft';
import Process from '../sections/Process';
import TechStack from '../sections/TechStack';
import CTA from '../sections/CTA';

/** Below-the-fold bundle: loaded after Hero for a smaller initial JS parse. */
export default function HomeBelowFold() {
  return (
    <>
      <Services />
      <Work />
      <WhyZappisoft />
      <Process />
      <TechStack />
      <CTA />
    </>
  );
}
