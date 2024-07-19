'use client';

import React, { useContext } from 'react';
import Image, { StaticImageData } from 'next/image';
import blackChkIco from '@/public/images/black_check_icon.png';
import greenChkIco from '@/public/images/green_check_icon.png';
import { Plan } from '@/app/pricing/types/plan';
import { PricingContext } from '@/app/pricing/pricing-context';

type PlanTableViewProps = {
  plan: Plan;
  pIdx: number;
};

export const PlanTableElmView = ({ plan, pIdx }: PlanTableViewProps) => {
  const { isSelectedMonthlyState } = useContext(PricingContext);
  const [isSelectedMonthly] = isSelectedMonthlyState;

  return (
    <div className="plan-table-elms">
      <div className="px-8 pt-14 pb-6">
        <div
          className={`text-3xl font-bold ${pIdx === 3 && 'text-blue-500'} ${pIdx === 3 && 'xl:mt-6'}`}
        >
          {plan.title}
        </div>
        <div className="text-sm text-[#787f84]">({plan.mau})</div>
        <div className="text-3xl h-12 mt-[40px]">
          <span className="font-bold">
            {(isSelectedMonthly ? plan.price.monthly : plan.price.yearly) ?? '가격문의'}
          </span>
          <span
            className="text-[#787F84] text-[24px]"
            style={{
              display:
                (isSelectedMonthly && plan.price.monthly) || !isSelectedMonthly
                  ? undefined
                  : 'none',
            }}
          >
            &nbsp;/ 월
          </span>
          <div className={`text-gray-500 text-sm ${isSelectedMonthly && 'hidden'}`}>
            {plan.price.standard}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 my-8 pl-8 pr-4 py-14 h-[200px] border-t-[1px]">
        {plan.details.map((detail, idx) => (
          <div
            key={`${plan.title}-detail-${idx}`}
            className="flex items-center gap-3 pr-3"
          >
            <Image
              width={24}
              height={24}
              src={
                pIdx === 3
                  ? (blackChkIco as StaticImageData)
                  : (greenChkIco as StaticImageData)
              }
              alt={detail}
              style={{ width: 24, height: 24 }}
            />
            <div className="font-[400px]">{detail}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
