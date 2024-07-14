import React, { createContext } from 'react';

export type ModalState = {
  title?: string;
  body?: string | React.ReactNode;
  confirm?: boolean;
  action?: () => void;
};

export type GlobalContextType = {
  modalState: [modal: ModalState, setModal: (val: ModalState) => void];
};

export const initModal = {};

export const initGlobalContext: GlobalContextType = {
  modalState: [{}, () => {}],
};

export const GlobalContext = createContext(initGlobalContext);
