import React from 'react';
import Link from 'next/link';
import notFoundImg from '@/public/images/not_found.png';
import Image, { StaticImageData } from 'next/image';

const NotFound = () => {
  return (
    <div className="bg-white w-screen h-screen flex flex-col justify-center items-center gap-10">
      <Image
        className="animate-bounce"
        src={notFoundImg as StaticImageData}
        alt="페이지를 찾을 수 없습니다."
      />
      <p className="text-gray-900 text-5xl font-semibold fade-in"> Page not found...</p>
      <Link
        className="py-3 px-6 rounded-full bg-blue-600 hover:bg-blue-500 btn-hover text-white appear"
        href={'/'}
      >
        홈으로 바로가기
      </Link>
    </div>
  );
};

export default NotFound;
