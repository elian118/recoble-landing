'use client';

import React from 'react';
import { menus } from '@/libs/contstans';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import ContactBtn from '@/components/contact-btn';
import PopMenuBar from '@/components/pop-menu-bar';
import Image, { StaticImageData } from 'next/image';
import logo from '@/public/images/logo.png';
import trademark from '@/public/images/trademark.png';
import { Close, Hamburger } from '@/public/icons';
import ModalBtn from '@/components/modal-btn';
import { useMobileMenu } from '@/libs/hooks';

const MenuBar = () => {
  const { isOpenMobileMenu, setIsOpenMobileMenu } = useMobileMenu();
  const pathname = usePathname();
  const isValidRoute = menus.map((e) => e.pathName).includes(pathname);

  return (
    <div
      className={`menu-bar
        ${!isValidRoute && 'hidden'} 
        ${
          pathname === '/'
            ? 'bg-neutral-50'
            : pathname === '/about'
              ? 'bg-[#ebf4ff]'
              : 'bg-white'
        }`}
    >
      <div
        className={`
          navbar flex px-0 md:px-8 xl:px-0 xl:mx-2 w-full xl:w-[1320px] h-16 xl:h-[80px] top-0 left-0 z-50 border-b-[1px] border-neutral-300
          ${
            pathname === '/'
              ? 'bg-neutral-50'
              : pathname === '/about'
                ? 'bg-[#ebf4ff]'
                : 'bg-white'
          }
          `}
      >
        <div className="navbar-start">
          <Link
            className="flex xl:p-0 items-center gap-4 text-3xl font-semibold cursor-pointer text-gray-900 btn btn-ghost"
            href={'/'}
          >
            <Image
              className="size-[43px] object-contain flex items-center justify-center"
              src={logo as StaticImageData}
              alt="logo"
              style={{ height: 'auto' }}
            />
            <Image
              className="w-[110px] object-contain"
              src={trademark}
              alt="trademark"
              style={{ height: 'auto' }}
            />
          </Link>
        </div>
        <div className="navbar-center pt-1 xl:w-7/12">
          <div className="hidden xl:flex gap-8 cursor-pointer">
            {menus
              .filter((e) => e.isMain)
              .map((e) => (
                <Link
                  key={e.name}
                  className={`text-lg ${pathname === e.pathName ? 'text-blue-500' : 'text-gray-900'} font-normal btn btn-ghost`}
                  href={e.pathName}
                >
                  {e.name}
                </Link>
              ))}
          </div>
        </div>
        <div className="navbar-end">
          <div className="flex flex-row gap-6 justify-end items-center text-gray-900 pr-2">
            {/*<Link*/}
            {/*  className="hidden lg:flex font-normal btn btn-ghost min-w-[50px] text-base"*/}
            {/*  href={'/home'}*/}
            {/*>*/}
            {/*  로그인*/}
            {/*</Link>*/}
            <ModalBtn
              className="hidden lg:flex font-normal btn btn-ghost min-w-[80px] text-base"
              body="준비중입니다."
            >
              로그인
            </ModalBtn>
            <div className="hidden lg:flex">
              <ContactBtn />
            </div>
            <label className="btn btn-circle btn-ghost swap swap-rotate xl:hidden">
              <input
                className="invisible"
                type="checkbox"
                checked={isOpenMobileMenu}
                onChange={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
              />
              <Hamburger />
              <Close />
            </label>
          </div>
        </div>
      </div>
      <PopMenuBar />
    </div>
  );
};

export default MenuBar;
