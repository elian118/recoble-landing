import React from 'react';
import { plans } from '@/app/pricing/constants';
import { PlanTableElmView } from '@/app/pricing/components/views';

export const PlanTableView = () => {
  return (
    <div className="plan-table plan-table-align hidden sm:flex">
      {plans.map((plan, pIdx) => (
        <PlanTableElmView key={plan.title} plan={plan} pIdx={pIdx} />
      ))}
    </div>
  );
};
