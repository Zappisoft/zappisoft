import dynamic from 'next/dynamic';
import MainLayout from '@/layouts/MainLayout';
import Hero from '@/sections/Hero';

const HomeBelowFold = dynamic(() => import('@/components/HomeBelowFold'), {
  loading: () => null,
});

export default function HomePage() {
  return (
    <MainLayout>
      <Hero />
      <HomeBelowFold />
    </MainLayout>
  );
}
