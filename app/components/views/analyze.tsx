import React from 'react';
import imgHomeContent2 from '@/public/images/img_home_content_02_1.png';
import Image, { StaticImageData } from 'next/image';

export const Analyze = () => {
  return (
    <section className="analyze-section">
      <div className="analyze-section-container">
        {/* invisible */}
        <div className="flex flex-col gap-4 w-full items-center lg:items-start content card-text">
          <p className="text-blue-600 text-2xl xl:text-[26px] font-semibold">analyze</p>
          <p className="text-3xl sm:text-5xl xl:text-[52px] font-bold">
            고객을 깊이 탐구하세요
          </p>
          <p className="text-lg sm:text-xl xl:text-[26px] font-medium xl:leading-[40px] lg:mt-6 lg:mb-28 text-center md:text-start">
            자동으로 정리된 분석 지표를 통해
            <br />
            개선 방법을 손쉽게 찾아볼 수 있어요.
          </p>
        </div>
        {/* invisible */}
        <Image
          className="object-contain w-[380px] xl:w-[531px] xl:[h-562px] content card-graph"
          src={imgHomeContent2 as StaticImageData}
          alt="recoble customer view"
          style={{ height: 'auto' }}
        />
      </div>
    </section>
  );
};
