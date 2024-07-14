'use client';

import React, { useId } from 'react';

type ModalProps = {
  title?: string;
  body?: string | React.ReactNode;
  className?: string;
  confirm?: boolean;
  action?: () => void;
  children?: React.ReactNode;
};

const Modal = ({ title, body, className, confirm, action, children }: ModalProps) => {
  const modalId = useId();

  return (
    <div>
      <button
        className={`${className ?? 'btn'}`}
        onClick={() =>
          /*
          타입스크립트에서는 document 요소를 HTMLElement 타입으로 검사
            => showModal()을 오류라 판단
            => 아래와 같이 타입단언 처리
          */
          (document.getElementById(modalId) as HTMLDialogElement)?.showModal()
        }
      >
        {children}
      </button>
      <dialog id={modalId} className="modal modal-bottom sm:modal-middle">
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
              <button id="closeModalBtn" className="btn btn-sm btn-outline">
                {confirm ? '취소' : '닫기'}
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
