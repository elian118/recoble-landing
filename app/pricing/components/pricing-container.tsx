'use client';

import React, { useState } from 'react';
import { PricingContext, PricingContextType } from '@/app/pricing/pricing-context';
import { Banner } from '@/app/pricing/components/banner';
import { PlanTable } from '@/app/pricing/components/plan-table';

const PricingContainer = () => {
  const [isSelectedMonthly, setIsSelectedMonthly] = useState(true);

  const value: PricingContextType = {
    isSelectedMonthlyState: [isSelectedMonthly, setIsSelectedMonthly],
  };

  return (
    <PricingContext.Provider value={value}>
      <Banner />
      <PlanTable />
    </PricingContext.Provider>
  );
};

export default PricingContainer;
