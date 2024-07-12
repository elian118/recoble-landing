'use client';

import React, { useState } from 'react';
import { menus } from '@/libs/contstans';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import ContactBtn from '@/components/ContactBtn';
import PopMenuBar from '@/components/PopMenuBar';
import Image, { StaticImageData } from 'next/image';
import logo from '@/public/images/logo.png';

const MenuBar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <>
      <div
        className={`
          flex justify-center w-full border-b-[1px] border-neutral-300 top-0 left-0 fixed z-50
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
            className="flex items-center gap-4 text-3xl font-semibold cursor-pointer text-gray-900 btn-bold-hover"
            href={'/'}
          >
            <div className="size-12">
              <Image width={100} height={100} src={logo as StaticImageData} alt="logo" />
            </div>
            <span>Recoble</span>
          </Link>
          <div className="hidden xl:flex flex-row flex-auto w-4/5 px-8 items-center gap-8 cursor-pointer">
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
          <div className="flex flex-row gap-6 justify-end items-center w-[230px] text-gray-900">
            <Link className="hidden lg:flex btn-hover min-w-[50px]" href={'/home'}>
              로그인
            </Link>
            <div className="hidden lg:flex min-w-[110px]">
              <ContactBtn setIsOpenMenu={setIsOpenMenu} />
            </div>
            <div
              className="size-10 xl:hidden text-4xl btn-hover text-end"
              onClick={() => setIsOpenMenu(!isOpenMenu)}
            >
              {isOpenMenu ? '×' : '≡'}
            </div>
          </div>
        </div>
      </div>
      <PopMenuBar openMenuState={[isOpenMenu, setIsOpenMenu]} />
    </>
  );
};

export default MenuBar;
