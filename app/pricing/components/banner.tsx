'use client';

import React from 'react';
import Ball from '@/components/ball';

type BannerProps = {
  isSelectedMonthlyState: [boolean, (val: boolean) => void];
};

export const Banner = ({ isSelectedMonthlyState }: BannerProps) => {
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
      {/* 배경 장식 */}
      <div className="pricing-back-circle1 appear" />
      <div className="pricing-back-circle2 appear" />
      <div className="py-8 w-full">
        <Ball
          color="via-yellow-400 to-yellow-800"
          size="size-6"
          delay="delay-0"
          right="18%"
          top="-18%"
        />
        <Ball
          color="via-green-400 to-green-800"
          size="size-10"
          delay="delay-200"
          left="-22%"
          top="39%"
        />
        <Ball
          color="via-blue-400 to-blue-800"
          size="size-8"
          delay="delay-700"
          right="-26%"
          bottom="24%"
        />
      </div>
    </div>
  );
};
