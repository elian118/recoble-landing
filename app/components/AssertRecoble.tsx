import React from 'react';
import assertRecobleSlide from '@/public/images/assert_recoble_slide.png';
import Image, { StaticImageData } from 'next/image';

const AssertRecoble = () => {
  return (
    <section className="w-full max-h-screen bg-black p-8 flex flex-row justify-center items-center">
      <div className="bg-gray-100 w-full h-full rounded-2xl sm:pr-0 lg:pt-12 lg:py-12 flex flex-wrap md:flex-nowrap justify-between gap-0 lg:gap-6">
        <div className="w-full lg:w-1/2 flex flex-col gap-8 justify-center items-center pt-8 md:pt-0 content card-text">
          <p className="text-2xl md:text-3xl xl:text-5xl font-light leading-normal sm:leading-tight text-center lg:text-start">
            모든 이커머스 플랫폼의
            <br />
            성공전략, <span className="font-semibold">레코블</span>
          </p>
          <p className="text-2xl font-semibold md:text-3xl xl:text-5xl lg:mt-6 text-center lg:text-start">
            지금 바로 확인해보세요
          </p>
        </div>
        <div className="pl-8 pt-6 lg:pt-0 md:pl-0 w-full lg:w-1/2 flex justify-end content card-graph">
          <Image
            height={490}
            src={assertRecobleSlide as StaticImageData}
            alt="Recommand you Recoble!"
          />
        </div>
      </div>
    </section>
  );
};

export default AssertRecoble;
