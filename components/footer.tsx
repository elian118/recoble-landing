'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { publicUrls } from '@/libs/contstans';
import FooterContents from '@/components/views/footer-contents';

const Footer = () => {
  const pathname = usePathname();

  return (
    <div
      style={{
        display:
          !Object.keys(publicUrls).includes(pathname) ||
          pathname === '/contact-us' ||
          pathname === '/about' ||
          pathname === '/'
            ? 'none'
            : 'inherit',
      }}
      className="w-full bg-black text-white px-6 py-14 md:px-12 md:py-8 xl:px-14 xl:py-11"
    >
      <FooterContents />
    </div>
  );
};

export default Footer;
