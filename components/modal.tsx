'use client';

import React from 'react';
import { useModal } from '@/libs/hooks';

const Modal = () => {
  const { modal, resetModal } = useModal();
  const { title, body, confirm, action } = modal;

  return (
    <dialog id="modal" className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h3 className="font-bold text-lg">{title ?? '알림'}</h3>
        <p className="py-4">{body}</p>
        <div className="modal-action">
          {confirm && (
            <button
              className="btn btn-sm btn-outline"
              onClick={() => {
                action && action();
                document.getElementById('closeModalBtn')?.click();
              }}
            >
              확인
            </button>
          )}
          <form className="flex gap-2" method="dialog">
            <button
              id="closeModalBtn"
              className="btn btn-sm btn-outline"
              onClick={resetModal}
            >
              {confirm ? '취소' : '닫기'}
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
