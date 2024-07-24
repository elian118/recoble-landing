import React from 'react';
import mainImg from '@/public/images/main_img.png';
import composition from '@/public/images/compositon.gif';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

export const Preview = () => {
  return (
    <section className="preview-section">
      <div className="m-6 content card-img bg-gray-200 sm:hidden invisible">
        <Image
          className="rounded-full ease-linear"
          src={composition as StaticImageData}
          alt="recoble composition"
          style={{ width: 200, height: 200 }}
          unoptimized
        />
      </div>
      <div className="flex flex-col content justify-center items-center gap-6 content card-text invisible pt-0 sm:pt-36">
        <p className="text-3xl sm:text-5xl xl:text-[66px] font-bold text-center sm:leading-tight xl:leading-[72px]">
          레코블의 인사이트를 통해
          <br />
          고객을 놓치지 마세요!
        </p>
        <p className="text-lg sm:text-2xl xl:text-26px font-[400px] text-center leading-snug xl:leading-[30px]">
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
      <div className="content card-graph bg-gray-200 w-full hidden sm:flex justify-center items-end invisible">
        <Image
          className="ease-linear sm:object-contain xl:w-[1220px] xl:max-h-[562px] px-8 h-2/5"
          src={mainImg as StaticImageData}
          alt="recoble composition"
          style={{ width: 'auto', height: 'auto' }}
        />
      </div>
    </section>
  );
};
