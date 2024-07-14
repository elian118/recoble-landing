import React from 'react';
import Ball from '@/components/ball';

export const Answer = () => {
  return (
    <div className="answer">
      <div className="answer-text">
        <p>레코블은 고객의 문제점을 정확히 파악하고</p>
        <p>빠르게 해결책을 제공할 수 있도록</p>
        <p className="font-semibold leading-loose">
          통합된 보고서 지원 및 AI 추천을&nbsp;
          <br className="flex sm:hidden" />
          제공하고 있습니다.
        </p>
        <div className="answer-back answer-back-circle1" />
        <div className="answer-back answer-back-circle2" />
      </div>
      <Ball
        color="via-gray-100 to-gray-500"
        size="size-10"
        delay="delay-0"
        left="6%"
        top="14%"
      />
      <Ball
        color="via-yellow-400 to-yellow-800"
        size="size-8"
        delay="delay-0"
        right="5%"
        top="6%"
      />
      <Ball
        color="via-green-400 to-green-800"
        size="size-6"
        delay="delay-200"
        right="21%"
        bottom="36%"
      />
      <Ball
        color="via-blue-400 to-blue-800"
        size="size-8"
        delay="delay-700"
        left="12%"
        bottom="26%"
      />
    </div>
  );
};
