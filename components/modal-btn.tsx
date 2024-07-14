'use client';

import React from 'react';
import { useModal } from '@/libs/hooks';
import { ModalState } from '@/libs/global-context';

type ModalBtnProps = {
  className?: string;
  children?: React.ReactNode;
} & ModalState;

const ModalBtn = ({ className, children, ...props }: ModalBtnProps) => {
  const { openModal } = useModal();

  return (
    <button className={`${className ?? 'btn'}`} onClick={() => openModal(props)}>
      {children}
    </button>
  );
};

export default ModalBtn;
