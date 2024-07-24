'use client';

import React, { useEffect } from 'react';
import { plans } from '@/app/pricing/constants';
import { PlanTableElmView } from '@/app/pricing/components/views';
import { useWinSize } from '@/libs/hooks';

export const PlanTableView = () => {
  const { winWidth, setWinWidth } = useWinSize();

  useEffect(() => {
    setWinWidth(window.innerWidth);
  }, [winWidth, setWinWidth]);

  return (
    <div
      className={`plan-table plan-table-align hidden sm:flex ${winWidth >= 1536 && winWidth <= 1740 ? 'z-10' : ''}`}
      style={{ width: winWidth >= 1280 && winWidth < 1547 ? '55%' : undefined }}
    >
      {plans.map((plan, pIdx) => (
        <PlanTableElmView key={plan.title} plan={plan} pIdx={pIdx} />
      ))}
    </div>
  );
};
