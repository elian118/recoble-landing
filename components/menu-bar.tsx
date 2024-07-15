'use client';

import React from 'react';
import { menus } from '@/libs/contstans';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import ContactBtn from '@/components/contact-btn';
import PopMenuBar from '@/components/pop-menu-bar';
import Image, { StaticImageData } from 'next/image';
import logo from '@/public/images/logo.png';
import { Close, Hamburger } from '@/public/icons';
import ModalBtn from '@/components/modal-btn';
import { useModal } from '@/libs/hooks';
import { useMobileMenu } from '@/libs/hooks';

const MenuBar = () => {
  const { isOpenMobileMenu, setIsOpenMobileMenu } = useMobileMenu();
  const pathname = usePathname();
  const { isOpen } = useModal();
  const isValidRoute = menus.map((e) => e.pathName).includes(pathname);

  return (
    <div
      className={`flex flex-row w-full h-16 justify-center items-center border-b-[1px] border-neutral-300 z-50
      ${!isValidRoute && 'hidden'} 
      ${!isOpen() && 'fixed'}
      ${
        pathname === '/'
          ? 'bg-neutral-50'
          : pathname === '/about'
            ? 'bg-blue-50'
            : 'bg-white'
      }`}
    >
      <div
        className={`
          navbar flex px-8 w-full xl:w-10/12 h-16 top-0 left-0 z-50 border-b-[1px] border-neutral-300
          ${
            pathname === '/'
              ? 'bg-neutral-50'
              : pathname === '/about'
                ? 'bg-blue-50'
                : 'bg-white'
          }
          `}
      >
        <div className="navbar-start">
          <Link
            className="flex items-center gap-4 text-3xl font-semibold cursor-pointer text-gray-900 btn btn-ghost"
            href={'/'}
          >
            <div className="size-12 flex items-center justify-center">
              <Image
                src={logo as StaticImageData}
                alt="logo"
                style={{ width: 'auto', height: 'auto' }}
              />
            </div>
            <span>Recoble</span>
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
          <div className="flex flex-row gap-6 justify-end items-center text-gray-900">
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
            <div className="hidden lg:flex min-w-[110px]">
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
