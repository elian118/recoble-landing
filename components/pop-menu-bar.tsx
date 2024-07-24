'use client';

import React from 'react';
import { menus } from '@/libs/contstans';
import { usePathname } from 'next/navigation';
import ContactBtn from '@/components/contact-btn';
import Link from 'next/link';
import { useMobileMenu } from '@/libs/hooks';

const PopMenuBar = () => {
  const { isOpenMobileMenu, setIsOpenMobileMenu } = useMobileMenu();
  const pathname = usePathname();

  return (
    <div
      className={`pop-menu-bar ${isOpenMobileMenu ? 'translate-y-0' : '-translate-y-full'}`}
    >
      <div className="flex flex-col gap-4 w-full pr-2">
        {menus.map((e, idx) =>
          idx === 3 ? (
            <div key={e.name} className="px-4">
              <ContactBtn />
            </div>
          ) : (
            <Link
              key={e.name}
              className={`
                text-lg btn btn-ghost font-normal w-[100px]
                ${pathname === e.pathName ? 'text-blue-500' : 'text-gray-900'}
              `}
              href={e.pathName}
              onClick={() => setIsOpenMobileMenu(false)}
            >
              {e.name}
            </Link>
          ),
        )}
      </div>
    </div>
  );
};

export default PopMenuBar;
