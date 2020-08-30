import React, { useContext } from 'react';
import Modal from '../../components/Modal';
import ThemesList from '../../components/ThemesList';
import { AddThemeModalContext } from '../../contexts/AddThemeModalContext';
import ModalContent from './components/ModalContent';

const MyLibrary = ({ navigation }) => {
  const { modalOpen, setModalOpen } = useContext(AddThemeModalContext);

  return (
    <>
      <ThemesList
        userId={1}
        userName="Beatriz Schwartz"
        navigation={navigation}
      />
      <Modal modalVisible={modalOpen}>
        <ModalContent modalVisible={modalOpen} setModalVisible={setModalOpen} />
      </Modal>
    </>
  );
};

export default MyLibrary;
