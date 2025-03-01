'use client';

import React, { useEffect } from 'react';
import Ball from '@/components/ball';
import { useWinSize } from '@/libs/hooks';

export const Answer = () => {
  const { winWidth, setWinWidth } = useWinSize();

  useEffect(() => {
    setWinWidth(window.innerWidth);
  }, [winWidth, setWinWidth]);

  return (
    <div className="answer">
      {/* 여백 박스 */}
      <div className="w-full h-[80px] hidden: xl:block" />
      <div className="answer-text">
        <p>
          레코블은 고객의 문제점을&nbsp;
          <br className="flex sm:hidden" />
          정확히 파악하고
        </p>
        <p>빠르게 해결책을 제공할 수 있도록</p>
        <p className="font-bold leading-loose">
          통합된 보고서 지원 및 AI 추천을&nbsp;
          <br className="flex sm:hidden" />
          제공하고 있습니다.
        </p>
        <div className="answer-back answer-back-circle1" />
        <div className="answer-back answer-back-circle2" />
      </div>
      <Ball
        color="via-gray-100 to-gray-500"
        size="sm:size-8 size-6"
        left={winWidth >= 768 ? '4%' : '10%'}
        top={winWidth >= 768 ? '30%' : '34%'}
      />
      <Ball
        color="via-yellow-400 to-yellow-800"
        size="sm:size-6 size-4"
        delay="animation-delay-base"
        right="8%"
        top={winWidth >= 768 ? '34%' : '40%'}
      />
      <Ball
        color="via-green-400 to-green-800"
        size="sm:size-4 size-2"
        delay="animation-delay-rapid"
        right={winWidth >= 768 ? '15%' : '12%'}
        bottom={winWidth >= 768 ? '34%' : '40%'}
      />
      <Ball
        color="via-blue-400 to-blue-800"
        size="sm:size-6 size-4"
        delay="animation-delay-slow"
        left="8.5%"
        bottom={winWidth >= 768 ? '38%' : '35%'}
      />
    </div>
  );
};
