'use client';

import { useContext } from 'react';
import { GlobalContext } from '@/libs/global-context';

export const useMobileMenu = () => {
  const { isOpenMobileState } = useContext(GlobalContext);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = isOpenMobileState;

  return { isOpenMobileMenu, setIsOpenMobileMenu };
};
