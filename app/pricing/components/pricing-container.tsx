'use client';

import React, { useEffect, useState } from 'react';
import { PricingContext, PricingContextType } from '@/app/pricing/pricing-context';
import { Banner } from '@/app/pricing/components/banner';
import { PlanTableView } from '@/app/pricing/components/views/plan-table-view';
import { MobilePlanTableView } from '@/app/pricing/components/views/mobile-plan-table-view';

const PricingContainer = () => {
  const [isSelectedMonthly, setIsSelectedMonthly] = useState(true);

  const winWidth = window.innerWidth;
  const value: PricingContextType = {
    isSelectedMonthlyState: [isSelectedMonthly, setIsSelectedMonthly],
  };

  useEffect(() => {
    //
  }, [winWidth]);

  return (
    <PricingContext.Provider value={value}>
      <Banner />
      {winWidth >= 683 ? <PlanTableView /> : <MobilePlanTableView />}
    </PricingContext.Provider>
  );
};

export default PricingContainer;
