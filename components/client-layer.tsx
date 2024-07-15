'use client';

import React, { useState } from 'react';
import {
  initModal,
  GlobalContext,
  GlobalContextType,
  ModalState,
} from '@/libs/global-context';

const ClientLayer = ({ children }: { children: React.ReactNode }) => {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState<boolean>(false);
  const [modal, setModal] = useState<ModalState>(initModal);

  const value: GlobalContextType = {
    isOpenMobileState: [isOpenMobileMenu, setIsOpenMobileMenu],
    modalState: [modal, setModal],
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

export default ClientLayer;
