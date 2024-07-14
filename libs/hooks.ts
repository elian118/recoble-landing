import { useContext } from 'react';
import { GlobalContext, ModalState } from '@/libs/global-context';

export const useModal = () => {
  const { modalState } = useContext(GlobalContext);
  const [modal, setModal] = modalState;

  const callModal = (props: ModalState) => {
    setModal(props);
  };

  const openModal = (props: ModalState) => {
    callModal(props);
    (document.getElementById('modal') as HTMLDialogElement)?.showModal();
  };

  const resetModal = () => {
    setModal({});
  };

  return {
    modal,
    callModal,
    openModal,
    resetModal,
  };
};
