'use client';

import React from 'react';
import { menus } from '@/libs/contstans';
import { usePathname, useRouter } from 'next/navigation';
import ContactBtn from '@/components/ContactBtn';

type MenuBarProps = {
  openMenuState: [boolean, (val: boolean) => void];
};

const PopMenuBar = ({ openMenuState }: MenuBarProps) => {
  const { push } = useRouter();
  const [isOpenMenu, setIsOpenMenu] = openMenuState;
  const pathname = usePathname();

  const onClickMenuIcon = (pathName) => {
    push(pathName);
    setIsOpenMenu(false);
  };

  return (
    <div className={`pop-menu-bar ${isOpenMenu ? 'translate-y-0' : '-translate-y-full'}`}>
      {menus.map((e, idx) =>
        idx === 3 ? (
          <ContactBtn key={e.name} setIsOpenMenu={setIsOpenMenu} />
        ) : (
          <div
            key={e.name}
            className={`text-lg ${pathname === e.pathName ? 'text-blue-500' : 'text-gray-900'} btn-hover w-[100px]`}
            onClick={() => onClickMenuIcon(e.pathName)}
          >
            {e.name}
          </div>
        ),
      )}
    </div>
  );
};

export default PopMenuBar;
