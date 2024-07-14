'use client';

import React, { useState } from 'react';
import {
  initModal,
  GlobalContext,
  GlobalContextType,
  ModalState,
} from '@/libs/global-context';

const ClientLayer = ({ children }: { children: React.ReactNode }) => {
  const [modal, setModal] = useState<ModalState>(initModal);

  const value: GlobalContextType = {
    modalState: [modal, setModal],
  };

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
};

export default ClientLayer;
