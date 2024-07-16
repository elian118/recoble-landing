'use client';

import React, { useContext } from 'react';
import BackDecorateView from '@/app/pricing/components/views/back-decorate-view';
import { PricingContext } from '@/app/pricing/pricing-context';

export const Banner = () => {
  const { isSelectedMonthlyState } = useContext(PricingContext);
  const [isSelectedMonthly, setIsSelectedMonthly] = isSelectedMonthlyState;

  return (
    <div className="pricing-banner">
      <p className="pricing-banner-title">Pricing plans</p>
      <p className="pricing-banner-description">
        기업의 단계별로 좀 더 세밀하고 합리적인
        <br className="flex xl:hidden" />
        &nbsp;가격 정책으로
        <br className="hidden xl:flex" />
        &nbsp;가격의 경쟁 우위를 확보하여
        <br className="flex xl:hidden" />
        &nbsp;SMB 고객의 마케팅 비용절감을 돕습니다.
      </p>
      <div className="pricing-tab">
        <span className="indicator-item badge badge-secondary badge-sm">
          <div className="relative">
            <span className="badge badge-secondary animate-ping absolute -top-2.5 -left-2.5" />
          </div>
        </span>
        <div
          className={`pricing-tab-period btn-hover ${isSelectedMonthly ? 'bg-white' : 'bg-neutral-200'} `}
          onClick={() => setIsSelectedMonthly(true)}
        >
          월간
        </div>
        <div
          className={`pricing-tab-period btn-hover ${!isSelectedMonthly ? 'bg-white' : 'bg-neutral-200'} `}
          onClick={() => setIsSelectedMonthly(false)}
        >
          연간
        </div>
      </div>
      <BackDecorateView />
    </div>
  );
};
