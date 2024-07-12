import React from 'react';
import personalizationSlide from '@/public/images/personalization_slide.png';
import Image, { StaticImageData } from 'next/image';

export const Personalization = () => {
  return (
    <section className="w-full h-screen bg-blue-600 p-8 flex flex-row justify-center items-center">
      <div className="w-full md:w-11/12 xl:w-9/12 gap-24 lg:gap-0 flex flex-wrap justify-between items-center">
        <div className="flex flex-col gap-4 w-full items-center lg:items-start lg:w-1/2 content card-text">
          <p className="text-white text-2xl">personalization</p>
          <p className="text-white text-3xl sm:text-5xl font-semibold leading-normal sm:leading-tight text-center lg:text-start">
            개인화된 맞춤형
            <br />
            경험을 제공합니다.
          </p>
          <p className="text-white text-lg sm:text-xl lg:mt-6 lg:mb-28 text-center md:text-start">
            고객에게 맞춤형 메시지를 보내어 브랜드에
            <br />
            대한 긍정적인 경험을 심어줄 수 있어요.
          </p>
        </div>
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end content card-graph">
          <Image
            src={personalizationSlide as StaticImageData}
            alt="recoble personalization"
          />
        </div>
      </div>
    </section>
  );
};
