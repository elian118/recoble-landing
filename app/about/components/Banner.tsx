import React from 'react';
import FadeIn from '@/components/FadeIn';
import Image from 'next/image';
import aboutImg from '@/public/images/about.png';
import Ball from '@/components/Ball';

export const Banner = () => {
  return (
    <div className="flex flex-col gap-4 w-full h-[700px] md:h-[800px] lg:h-screen justify-center items-center bg-blue-50">
      <FadeIn>
        <div className="py-8 max-w-[536px] relative">
          <Image
            width={536}
            height={402}
            layout="responsive"
            loading="lazy"
            src={aboutImg as string}
            alt="about recoble"
          />
          <Ball
            color="via-yellow-400 to-yellow-800"
            size="size-4"
            delay="delay-0"
            left="20%"
            top="12%"
          />
          <Ball
            color="via-green-400 to-green-800"
            size="size-6"
            delay="delay-200"
            left="-15%"
            top="39%"
          />
          <Ball
            color="via-blue-400 to-blue-800"
            size="size-4"
            delay="delay-750"
            left="73%"
            top="34%"
          />
        </div>
      </FadeIn>

      <p className="font-semibold text-3xl lg:text-4xl xl:text-6xl mb-3">Our Beginning</p>
      <p className="text-lg lg:text-xl xl:text-3xl w-10/12 sm:w-auto">
        레코블은 부푼 꿈을 안고 시작된&nbsp;
        <br className="flex sm:hidden" />
        우리의 서비스를 운영하면서
        <br />
        만났던 수 많은 문제점에서 시작되었습니다.
      </p>
      <p className="font-bold text-lg lg:text-xl xl:text-3xl mt-8 w-[300px] md:w-auto">
        우리와 같은 문제들이 반복되지 않도록&nbsp;
        <br className="flex sm:hidden" />
        레코블을 사용해보세요!
      </p>
    </div>
  );
};
