import { useContext } from 'react';
import { GlobalContext, initModal, ModalState } from '@/libs/global-context';

export const useModal = () => {
  const { modalState } = useContext(GlobalContext);
  const [modal, setModal] = modalState;

  const isOpen = () => {
    return modal.isOpen;
  };

  const openModal = (props: ModalState) => {
    setModal({ isOpen: true, ...props });
    (document.getElementById('modal') as HTMLDialogElement)?.showModal();
  };

  const resetModal = () => {
    setModal(initModal);
  };

  return {
    modal,
    isOpen,
    openModal,
    resetModal,
  };
};
