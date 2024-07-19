'use client';

import React, { useEffect, useState } from 'react';
import {
  initModal,
  GlobalContext,
  GlobalContextType,
  ModalState,
} from '@/libs/global-context';
import { isMobile } from '@/libs/utils';

const ClientLayer = ({ children }: { children: React.ReactNode }) => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState<boolean>(false);
  const [modal, setModal] = useState<ModalState>(initModal);

  useEffect(() => {
    if (isMobile()) {
      setIsMobileDevice(true);
    }
  }, []);

  const value: GlobalContextType = {
    isMobileDeviceState: [isMobileDevice, setIsMobileDevice],
    isOpenMobileMenuState: [isOpenMobileMenu, setIsOpenMobileMenu],
    modalState: [modal, setModal],
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

export default ClientLayer;
