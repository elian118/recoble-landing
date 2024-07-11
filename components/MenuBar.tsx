'use client';

import React from 'react';
import { menus } from '@/libs/contstans';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import ContactBtn from '@/components/ContactBtn';

const MenuBar = () => {
  const pathname = usePathname();

  return (
    <div
      className={`
        flex justify-center w-full border-b-[1px] border-neutral-300 
        ${
          pathname === '/'
            ? 'bg-neutral-50'
            : pathname === '/about'
              ? 'bg-blue-50'
              : 'bg-white'
        }`}
    >
      <div className="flex flex-row gap-12 justify-between items-center xl:w-10/12 w-full h-20 px-[30px]">
        <Link
          className="flex-none text-3xl font-semibold cursor-pointer text-gray-900 btn-bold-hover"
          href={'/'}
        >
          Recoble
        </Link>
        <div className="hidden lg:flex flex-row flex-auto w-4/5 items-center gap-8 cursor-pointer">
          {menus
            .filter((e) => e.isMain)
            .map((e) => (
              <Link
                key={e.name}
                className={`text-lg ${pathname === e.pathName ? 'text-blue-500' : 'text-gray-900'} btn-hover`}
                href={e.pathName}
              >
                {e.name}
              </Link>
            ))}
        </div>
        <div className="flex flex-row gap-6 justify-end items-center w-[230px] min-w-[230px] text-gray-900">
          <Link className="btn-hover" href={'/contact-us'}>
            로그인
          </Link>
          <ContactBtn />
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
