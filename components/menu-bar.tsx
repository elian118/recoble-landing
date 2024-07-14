'use client';

import React, { useState } from 'react';
import { menus, publicUrls } from '@/libs/contstans';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import ContactBtn from '@/components/contact-btn';
import PopMenuBar from '@/components/pop-menu-bar';
import Image, { StaticImageData } from 'next/image';
import logo from '@/public/images/logo.png';
import { Close, Hamburger } from '@/public/icons';
import Modal from '@/components/modal';

const MenuBar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
  const pathname = usePathname();

  return (
    <>
      <div
        style={{ display: Object.keys(publicUrls).includes(pathname) ? 'flex' : 'none' }}
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
            className="flex items-center gap-4 text-3xl font-semibold cursor-pointer text-gray-900 btn btn-ghost"
            href={'/'}
          >
            <div className="size-12 flex items-center justify-center">
              <Image src={logo as StaticImageData} alt="logo" />
            </div>
            <span>Recoble</span>
          </Link>
          <div className="hidden xl:flex flex-row flex-auto w-4/5 px-8 items-center gap-8 cursor-pointer">
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
          <div className="flex flex-row gap-6 justify-end items-center w-[230px] text-gray-900">
            {/*<Link*/}
            {/*  className="hidden lg:flex font-normal btn btn-ghost min-w-[50px] text-base"*/}
            {/*  href={'/home'}*/}
            {/*>*/}
            {/*  로그인*/}
            {/*</Link>*/}
            <Modal
              className="hidden lg:flex font-normal btn btn-ghost min-w-[80px] text-base"
              body="준비중입니다."
            >
              로그인
            </Modal>
            <div className="hidden lg:flex min-w-[110px]">
              <ContactBtn setIsOpenMenu={setIsOpenMenu} />
            </div>
            <label className="btn btn-circle btn-ghost swap swap-rotate xl:hidden">
              <input
                className="invisible"
                type="checkbox"
                checked={isOpenMenu}
                onChange={() => setIsOpenMenu(!isOpenMenu)}
              />
              <Hamburger />
              <Close />
            </label>
          </div>
        </div>
      </div>
      <PopMenuBar openMenuState={[isOpenMenu, setIsOpenMenu]} />
    </>
  );
};

export default MenuBar;
