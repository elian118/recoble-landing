import PricingContainer from '@/app/pricing/components/pricing-container';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center pt-6 pb-32 h-auto bg-[#f5f6f7] w-full overflow-hidden">
      <PricingContainer />
    </main>
  );
}
