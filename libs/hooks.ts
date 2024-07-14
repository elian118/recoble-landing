import { useContext } from 'react';
import { GlobalContext, ModalState } from '@/libs/global-context';

export const useModal = () => {
  const { modalState } = useContext(GlobalContext);
  const [modal, setModal] = modalState;

  const callModal = (props: ModalState) => {
    setModal(props);
  };

  const resetModal = () => {
    setModal({});
  };

  return {
    modal,
    callModal,
    resetModal,
  };
};
