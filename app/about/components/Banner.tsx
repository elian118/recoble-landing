import React from 'react';
import FadeIn from '@/components/FadeIn';
import Image from 'next/image';
import aboutImg from '@/public/images/about.png';

export const Banner = () => {
  return (
    <div className="flex flex-col gap-4 w-full justify-center items-center h-screen bg-blue-50">
      <div className="py-8">
        <FadeIn>
          <Image
            priority
            width={536}
            height={402}
            src={aboutImg as string}
            alt="about recoble"
          />
        </FadeIn>
      </div>
      <p className="font-semibold text-5xl">Our Beginning</p>
      <p className="text-2xl">
        레코블은 부푼 꿈을 안고 시작된 우리의 서비스를 운영하면서
        <br />
        만났던 수 많은 문제점에서 시작되었습니다.
      </p>
      <p className="font-bold text-2xl mt-8">
        우리와 같은 문제들이 반복되지 않도록 레코블을 사용해보세요!
      </p>
    </div>
  );
};
