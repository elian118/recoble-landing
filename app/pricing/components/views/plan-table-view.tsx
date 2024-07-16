'use client';

import React from 'react';
import { plans } from '@/app/pricing/constants';
import { PlanTableElmView } from '@/app/pricing/components/views';
import { useWinSize } from '@/libs/hooks';

export const PlanTableView = () => {
  const { winWidth } = useWinSize();

  return (
    <div
      className={`plan-table plan-table-align hidden sm:flex ${winWidth >= 1536 && winWidth <= 1740 ? 'z-10' : ''}`}
    >
      {plans.map((plan, pIdx) => (
        <PlanTableElmView key={plan.title} plan={plan} pIdx={pIdx} />
      ))}
    </div>
  );
};
