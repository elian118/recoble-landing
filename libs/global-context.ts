import React, { createContext } from 'react';

export type ModalState = {
  isOpen?: boolean;
  title?: string;
  body?: string | React.ReactNode;
  confirm?: boolean;
  action?: () => void;
};

export type GlobalContextType = {
  isOpenMobileState: [boolean, (val: boolean) => void];
  modalState: [modal: ModalState, setModal: (val: ModalState) => void];
};

export const initModal: ModalState = {
  isOpen: false,
};

export const initGlobalContext: GlobalContextType = {
  isOpenMobileState: [false, () => {}],
  modalState: [{ isOpen: false }, () => {}],
};

export const GlobalContext = createContext(initGlobalContext);
