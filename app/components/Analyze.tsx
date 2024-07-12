import React from 'react';
import imgHomeContent2 from '@/public/images/img_home_content_02.png';
import Image, { StaticImageData } from 'next/image';

export const Analyze = () => {
  return (
    <section className="w-full min-h-screen bg-gray-200 p-8 flex flex-row justify-center items-center">
      <div className="w-full md:w-11/12 xl:w-9/12 flex flex-wrap justify-between items-center">
        <div className="flex flex-col gap-4 w-full items-center lg:items-start lg:w-1/2 content card-text">
          <p className="text-blue-600 text-2xl">Analyze</p>
          <p className="text-3xl sm:text-5xl font-semibold">고객을 깊이 탐구하세요</p>
          <p className="text-lg sm:text-xl lg:mt-6 lg:mb-28 text-center md:text-start">
            자동으로 정리된 분석 지표를 통해
            <br />
            개선 방법을 손쉽게 찾아볼 수 있어요.
          </p>
        </div>
        <div className="w-full lg:w-1/2 content card-graph">
          <Image src={imgHomeContent2 as StaticImageData} alt="recoble customer view" />
        </div>
      </div>
    </section>
  );
};
