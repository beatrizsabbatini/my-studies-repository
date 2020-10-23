import React, { useContext } from 'react';

import { YellowBox } from 'react-native';
import _ from 'lodash';
import firebase from 'firebase';

import ThemesList from '../../components/ThemesList';
import Modal from '../../components/UI/Modal';
import { AddThemeModalContext } from '../../contexts/AddThemeModalContext';
import ManageThemeModalContent from '../../components/ManageThemeModalContent';

YellowBox.ignoreWarnings(['Setting a timer']);

const MyLibrary = ({ navigation, route }) => {
  const { modalOpen, setModalOpen } = useContext(AddThemeModalContext);

  var user = firebase.auth().currentUser;

  return (
    <>
      <ThemesList
        userId={1}
        userName={user.displayName}
        navigation={navigation}
        isMyProfile={true}
      />
      <Modal modalVisible={modalOpen}>
        <ManageThemeModalContent modalVisible={modalOpen} setModalVisible={setModalOpen} />
      </Modal>
    </>
  );
};

export default MyLibrary;
