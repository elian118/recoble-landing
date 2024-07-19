'use client';

import React, { useContext, useEffect } from 'react';
import { plans } from '@/app/pricing/constants';
import { PlanTableElmView } from '@/app/pricing/components/views';
import { GlobalContext } from '@/libs/global-context';

export const PlanTableView = () => {
  const { winWidthState } = useContext(GlobalContext);
  const [winWidth, setWinWidth] = winWidthState;

  useEffect(() => {
    setWinWidth(window.innerWidth);
  }, [winWidth, setWinWidth]);

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
