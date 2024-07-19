'use client';

import { useContext } from 'react';
import { GlobalContext } from '@/libs/global-context';

export const useMobileMenu = () => {
  const { isOpenMobileMenuState } = useContext(GlobalContext);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = isOpenMobileMenuState;

  return { isOpenMobileMenu, setIsOpenMobileMenu };
};
