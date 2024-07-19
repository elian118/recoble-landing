'use client';

import React, { useEffect } from 'react';
import Ball from '@/components/ball';
import { useWinSize } from '@/libs/hooks';

const BallDecorateView = () => {
  const { winWidth, setWinWidth } = useWinSize();

  useEffect(() => {
    setWinWidth(window.innerWidth);
  }, [winWidth, setWinWidth]);

  return (
    <div className="py-8 w-full">
      <Ball
        color="via-yellow-400 to-yellow-800"
        size="sm:size-6 size-4"
        right="35%"
        top={winWidth >= 1280 ? '10%' : '7%'}
      />
      <Ball
        color="via-green-400 to-green-800"
        size="sm:size-10 size-8"
        delay="animation-delay-rapid"
        left={winWidth >= 1280 ? '22%' : '5%'}
        top={winWidth >= 1280 ? '23%' : '18%'}
      />
      <Ball
        color="via-blue-400 to-blue-800"
        size="sm:size-6 size-4"
        delay="animation-delay-base"
        right={winWidth >= 1280 ? '24%' : '5%'}
        top={winWidth >= 1280 ? '30%' : '21%'}
      />
    </div>
  );
};

export default BallDecorateView;
