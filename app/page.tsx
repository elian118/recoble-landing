import { Analyze, Insight, Personalization, Prediction, Preview } from '@/app/components';
import AssertRecoble from '@/app/components/AssertRecoble';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between bg-white h-auto">
      <Preview />
      <Insight />
      <Analyze />
      <Prediction />
      <Personalization />
      <AssertRecoble />
    </main>
  );
}
