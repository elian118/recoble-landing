import React from 'react';
import composition from '@/public/images/compositon.gif';
import Image from 'next/image';

export const Preview = () => {
  return (
    <div className="w-full h-screen bg-gray-200 flex flex-col justify-center items-center gap-6 p-8">
      <div className="m-6">
        <Image
          width={200}
          height={200}
          src={composition as string}
          alt="recoble composition"
        />
      </div>
      <p className="text-3xl sm:text-5xl font-bold text-center sm:leading-tight">
        레코블의 인사이트를 통해
        <br />
        고객을 놓치지 마세요!
      </p>
      <p className="text-lg sm:text-2xl text-center leading-snug">
        고객의 충성도와 구매력을 높이는 핵심은
        <br />
        고객경험 개선에 있습니다.
      </p>
      <div className="rounded-full p-4 w-40 bg-gray-900 text-gradient-blue-orange text-center btn-hover">
        <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-cyan-100 bg-clip-text text-transparent text-xl font-bold">
          데모 체험하기
        </div>
      </div>
    </div>
  );
};
