'use client';

import React from 'react';
import { Ball } from '@/app/about/components';

type BannerProps = {
  isSelectedMonthlyState: [boolean, (val: boolean) => void];
};

export const Banner = ({ isSelectedMonthlyState }: BannerProps) => {
  const [isSelectedMonthly, setIsSelectedMonthly] = isSelectedMonthlyState;

  return (
    <div className="flex flex-col gap-6 justify-center items-center mt-40 mb-12 relative">
      <p className="text-3xl lg:text-4xl xl:text-6xl font-bold mb-2">Pricing plans</p>
      <p className="text-md lg:text-xl xl:text-2xl text-center text-gray-500">
        기업의 단계별로 좀 더 세밀하고 합리적인
        <br className="flex xl:hidden" />
        &nbsp;가격 정책으로
        <br className="hidden xl:flex" />
        &nbsp;가격의 경쟁 우위를 확보하여
        <br className="flex xl:hidden" />
        &nbsp;SMB 고객의 마케팅 비용절감을 돕습니다.
      </p>
      <div className="flex gap-1 rounded-md relative justify-between items-center mt-12 -mb-24 p-1 w-60 h-12 bg-neutral-200 z-20">
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
      {/* 배경 장식 */}
      <div className="size-[600px] rounded-full border border-gray-400 opacity-25 absolute top-[-70px] appear" />
      <div className="size-[800px] rounded-full border border-gray-400 opacity-25 absolute top-[-170px] appear" />
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
          delay="delay-750"
          right="-26%"
          bottom="24%"
        />
      </div>
    </div>
  );
};
