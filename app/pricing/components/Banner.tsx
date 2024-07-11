'use client';

import React from 'react';

type BannerProps = {
  isSelectedMonthlyState: [boolean, (val: boolean) => void];
};

export const Banner = ({ isSelectedMonthlyState }: BannerProps) => {
  const [isSelectedMonthly, setIsSelectedMonthly] = isSelectedMonthlyState;

  return (
    <div className="flex flex-col gap-6 justify-center items-center mt-32 mb-12">
      <p className="text-3xl lg:text-4xl xl:text-5xl font-bold">Pricing plans</p>
      <p className="text-md lg:text-xl xl:text-2xl text-center text-gray-500">
        기업의 단계별로 좀 더 세밀하고 합리적인
        <br className="flex xl:hidden" />
        &nbsp;가격 정책으로
        <br className="hidden xl:flex" />
        &nbsp;가격의 경쟁 우위를 확보하여
        <br className="flex xl:hidden" />
        &nbsp;SMB 고객의 마케팅 비용절감을 돕습니다.
      </p>
      <div className="flex gap-1 rounded-md relative justify-between items-center my-4 p-1 w-60 h-12 bg-neutral-200">
        <div
          className={`flex justify-center items-center rounded-md h-full w-1/2 btn-hover ${isSelectedMonthly ? 'bg-white' : 'bg-neutral-200'} `}
          onClick={() => setIsSelectedMonthly(true)}
        >
          월간
        </div>
        <div
          className={`flex justify-center items-center rounded-md h-full w-1/2 btn-hover ${!isSelectedMonthly ? 'bg-white' : 'bg-neutral-200'} `}
          onClick={() => setIsSelectedMonthly(false)}
        >
          연간
        </div>
        <div className="absolute -top-1 -right-1">
          <span className="relative flex size-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full size-3 bg-sky-500"></span>
          </span>
        </div>
      </div>
    </div>
  );
};
