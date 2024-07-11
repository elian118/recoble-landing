'use client';

import { Banner, PlanTable } from '@/app/pricing/components';
import { useState } from 'react';

export default function Home() {
  const [isSelectedMonthly, setIsSelectedMonthly] = useState(true);

  return (
    <main className="flex flex-col items-center justify-center pt-6 pb-32 h-auto bg-neutral-100 w-full">
      <Banner isSelectedMonthlyState={[isSelectedMonthly, setIsSelectedMonthly]} />
      <PlanTable isSelectedMonthly={isSelectedMonthly} />
    </main>
  );
}
