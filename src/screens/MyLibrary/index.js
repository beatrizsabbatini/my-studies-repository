import React, { useContext } from 'react';
import ThemesList from '../../components/ThemesList';
import Modal from '../../components/UI/Modal';
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
        isMyProfile={true}
      />
      <Modal modalVisible={modalOpen}>
        <ModalContent modalVisible={modalOpen} setModalVisible={setModalOpen} />
      </Modal>
    </>
  );
};

export default MyLibrary;
