import { useContext } from 'react';
import { GlobalContext, ModalState } from '@/libs/global-context';

export const useModal = () => {
  const { modalState } = useContext(GlobalContext);
  const [modal, setModal] = modalState;

  const openModal = (props: ModalState) => {
    setModal(props);
    (document.getElementById('modal') as HTMLDialogElement)?.showModal();
  };

  const resetModal = () => {
    setModal({});
  };

  return {
    modal,
    openModal,
    resetModal,
  };
};
