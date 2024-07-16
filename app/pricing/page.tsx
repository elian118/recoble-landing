import dynamic from 'next/dynamic';
import PageLoadingView from '@/components/page-loading-view';

const DynamicPricingContainer = dynamic(() => import('./components/pricing-container'), {
  ssr: false,
  loading: () => <PageLoadingView />,
});

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center pt-6 pb-32 h-auto bg-neutral-100 w-full">
      <DynamicPricingContainer />
    </main>
  );
}
