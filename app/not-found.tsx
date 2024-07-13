'use client';

import React from 'react';
import Link from 'next/link';
import notFoundImg from '@/public/images/not_found.png';
import Image, { StaticImageData } from 'next/image';
import Modal from '@/components/Modal';

const NotFound = () => {
  return (
    <div className="bg-white w-full h-screen flex flex-col justify-center items-center gap-10">
      <Image
        className="animate-bounce"
        src={notFoundImg as StaticImageData}
        alt="페이지를 찾을 수 없습니다."
      />
      <p className="text-gray-900 text-5xl font-semibold fade-in"> Page not found...</p>
      <Link
        className="btn btn-primary rounded-full text-white px-6 text-base appear"
        href={'/'}
      >
        홈으로 바로가기
      </Link>
    </div>
  );
};

export default NotFound;
