'use client';

import React from 'react';
import Ball from '@/components/ball';
import { useWinSize } from '@/libs/hooks';

const BackDecorateView = () => {
  const { winWidth } = useWinSize();

  return (
    <div className="flex flex-col items-center">
      <div className="pricing-back-circle1 appear" />
      <div className="pricing-back-circle2 appear" />
      <div className="py-8 w-full">
        <Ball
          color="via-yellow-400 to-yellow-800"
          size="sm:size-6 size-4"
          delay="delay-0"
          right="40%"
          top="18%"
        />
        <Ball
          color="via-green-400 to-green-800"
          size="sm:size-10 size-8"
          delay="delay-200"
          left={winWidth >= 660 ? '22%' : '5%'}
          top={winWidth >= 660 ? '43%' : '40%'}
        />
        <Ball
          color="via-blue-400 to-blue-800"
          size="sm:size-6 size-4"
          delay="delay-700"
          right={winWidth >= 660 ? '24%' : '5%'}
          bottom={winWidth >= 660 ? '40%' : '35%'}
        />
      </div>
    </div>
  );
};

export default BackDecorateView;
