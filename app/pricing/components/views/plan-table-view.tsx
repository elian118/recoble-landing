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
      className={`
        plan-table plan-table-align hidden sm:flex
        ${winWidth >= 971 && winWidth < 1024 ? 'w-[85%]' : ''}
        ${winWidth >= 1280 && winWidth < 1547 ? 'w-[55%]' : ''}
        ${winWidth >= 1536 && winWidth <= 1740 ? 'z-10' : ''}
      `}
    >
      {plans.map((plan, pIdx) => (
        <PlanTableElmView key={plan.title} plan={plan} pIdx={pIdx} />
      ))}
    </div>
  );
};
