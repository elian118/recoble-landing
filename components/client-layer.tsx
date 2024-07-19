'use client';

import React, { useEffect, useState } from 'react';
import {
  initModal,
  GlobalContext,
  GlobalContextType,
  ModalState,
} from '@/libs/global-context';
import { isMobile } from '@/libs/utils';
import { useThrottle } from '@/libs/hooks';

const ClientLayer = ({ children }: { children: React.ReactNode }) => {
  const [winWidth, setWinWidth] = useState<number>(0);
  const [winHeight, setWinHeight] = useState<number>(0);
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState<boolean>(false);
  const [modal, setModal] = useState<ModalState>(initModal);

  const updateWindowSize = useThrottle(() => {
    winWidth !== window.innerWidth && setWinWidth(window.innerWidth);
    winHeight !== window.innerHeight && setWinHeight(window.innerHeight);
  }, 250);

  useEffect(() => {
    window.addEventListener('resize', updateWindowSize);
    return () => window.removeEventListener('resize', updateWindowSize);
  }, [updateWindowSize]);

  useEffect(() => {
    if (isMobile()) {
      setIsMobileDevice(true);
    }
  }, []);

  const value: GlobalContextType = {
    winHeightState: [winWidth, setWinWidth],
    winWidthState: [winHeight, setWinHeight],
    isMobileDeviceState: [isMobileDevice, setIsMobileDevice],
    isOpenMobileMenuState: [isOpenMobileMenu, setIsOpenMobileMenu],
    modalState: [modal, setModal],
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

export default ClientLayer;
