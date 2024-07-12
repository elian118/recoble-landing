import React from 'react';
import predictionSlide1 from '@/public/images/prediction_slide_1.png';
import predictionSlide2 from '@/public/images/prediction_slide_2.png';
import Image from 'next/image';
import FadeIn from '@/components/FadeIn';

export const Prediction = () => {
  return (
    <div className="w-full min-h-screen bg-white p-8 flex flex-row justify-center items-center">
      <div className="w-full md:w-11/12 xl:w-9/12 flex flex-wrap justify-between items-center">
        <div className="my-8 xl:my-0 flex flex-col gap-4 w-full items-center lg:items-start lg:w-2/3 xl:w-2/5">
          <p className="text-blue-600 text-2xl">Prediction</p>
          <p className="text-3xl sm:text-5xl font-semibold leading-normal sm:leading-tight text-center lg:text-start">
            문제를 발견하여
            <br />
            예측하고 제안합니다.
          </p>
          <p className="text-lg sm:text-xl lg:mt-6 xl:mb-28 text-center lg:text-start">
            전문가 없이도 누구나 쉽고 빠르게
            <br />
            데이터를 활용하여 문제점과 해결책을
            <br />
            파악할 수 있어요.
          </p>
        </div>
        <div className="w-full lg:w-1/2 xl:w-3/5 mb-8 xl:mb-0 flex gap-12 justify-center md:justify-start items-center flex-wrap md:flex-nowrap">
          <FadeIn>
            <Image src={predictionSlide1 as string} alt="recoble customer view" />
          </FadeIn>
          <FadeIn>
            <Image src={predictionSlide2 as string} alt="recoble customer view" />
          </FadeIn>
        </div>
      </div>
    </div>
  );
};
