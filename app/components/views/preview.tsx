import React from 'react';
import composition from '@/public/images/compositon.gif';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export const Preview = () => {
  return (
    <section className="preview-section">
      <div className="m-6 content card-img bg-gray-200">
        <Image
          className="rounded-full animate-spin ease-linear"
          src={composition as StaticImageData}
          alt="recoble composition"
          style={{ width: 200, height: 200 }}
          unoptimized
        />
      </div>
      <div className="flex flex-col content justify-center items-center gap-6 content card-text">
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

        <Link
          href="http://recoble.ai/demo"
          className="btn btn-outline bg-black rounded-full px-8 h-14"
        >
          <div className="bg-gradient-to-r from-blue-600 via-cyan-500 to-cyan-200 bg-clip-text text-transparent text-xl font-bold">
            데모 체험하기
          </div>
        </Link>
      </div>
    </section>
  );
};
