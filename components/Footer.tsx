'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();

  return (
    <div
      style={{ display: pathname === '/contact-us' ? 'none' : 'inherit' }}
      className={`bg-black text-white px-6 py-14 md:px-12 md:py-8 xl:px-14 xl:py-11`}
    >
      <p>(주) 라이앤캐처스 | 대표이사: 허윤</p>
      <p>02-6954-0730 | info@ryencatchers.com</p>
      <br />
      <p className="text-sm font-light md:text-md md:font-light">
        © Copyright 2024, All Rights Reserved by Recoble
      </p>
      <br className="hidden md:flex" />
      <br className="hidden md:flex" />
      <br />
    </div>
  );
};

export default Footer;
