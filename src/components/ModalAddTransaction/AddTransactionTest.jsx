import React from 'react';
import ModalAddTransaction from './ModalAddTransaction';
import ButtonAdd from 'components/ModalForm/ButtonAdd';
import useToggleModal from 'HOC/useToggleModal';
import Modal from 'components/ModalForm/ModalForm';

const AddTransactionTest = () => {
  const { isOpen, openModal, closeModal, handleKeyDown, handleBackdropClick } =
    useToggleModal();
  return (
    <div>
      <ButtonAdd toggleModal={() => openModal()} text={'Add Transaction'} />
      {isOpen && (
        <Modal
          closeModal={() => closeModal()}
          handleKeyDown={handleKeyDown}
          handleBackdropClick={handleBackdropClick}
        >
          <ModalAddTransaction />
        </Modal>
      )}
    </div>
  );
};

export default AddTransactionTest;