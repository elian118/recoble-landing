'use client';

import React from 'react';
import { useModal } from '@/libs/hooks';
import { ModalState } from '@/libs/global-context';

type ModalBtnProps = {
  className?: string;
  children?: React.ReactNode;
} & ModalState;

const ModalBtn = ({
  title,
  body,
  confirm,
  action,
  className,
  children,
}: ModalBtnProps) => {
  const { callModal } = useModal();

  const openModal = () => {
    callModal({ title, body, confirm, action });
    (document.getElementById('modal') as HTMLDialogElement)?.showModal();
  };

  return (
    <button className={`${className ?? 'btn'}`} onClick={openModal}>
      {children}
    </button>
  );
};

export default ModalBtn;
