import React from 'react';
import FadeIn from '@/components/fade-in';
import Image, { StaticImageData } from 'next/image';
import aboutImg from '@/public/images/about_banner-cutout.png';
import Ball from '@/components/ball';

export const Banner = () => {
  return (
    <div className="banner">
      <FadeIn>
        <div className="relative">
          <Image
            className="size-[250px] sm:size-[320px] md:size-[410px] lg:size-[430px] object-contain"
            src={aboutImg as StaticImageData}
            alt="about recoble"
            priority
          />
          <Ball color="via-yellow-400 to-yellow-800" size="size-4" left="27%" top="18%" />
          <Ball
            color="via-green-400 to-green-800"
            size="size-6"
            delay="animation-delay-base"
            left="0%"
            top="48%"
          />
          <Ball
            color="via-blue-400 to-blue-800"
            size="size-4"
            delay="animation-delay-slow"
            right="10%"
            top="40%"
          />
        </div>
      </FadeIn>

      <p className="font-semibold text-3xl sm:text-4xl xl:text-[64px] mb-8">
        Our Beginning
      </p>
      <p className="text-lg sm:text-2xl lg:text-2xl xl:text-[30px] font-[400px] w-10/12 sm:w-auto lg:leading-relaxed xl:leading-[56px]">
        레코블은 부푼 꿈을 안고 시작된&nbsp;
        <br className="flex sm:hidden" />
        우리의 서비스를 운영하면서
        <br />
        만났던 수 많은 문제점에서&nbsp;
        <br className="flex sm:hidden" />
        시작되었습니다.
      </p>
      <p className="font-bold text-lg sm:text-2xl lg:text-2xl xl:text-3xl mt-3 w-[300px] md:w-auto">
        우리와 같은 문제들이 반복되지 않도록&nbsp;
        <br className="flex sm:hidden" />
        레코블을 사용해보세요!
      </p>
    </div>
  );
};
