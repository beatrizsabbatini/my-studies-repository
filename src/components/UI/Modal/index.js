import React, { useEffect } from 'react';
import { Modal, View } from 'react-native';
import styles from './styles';

const ModalComponent = ({ children, modalVisible }) => {
  
  return (
    <Modal animationType="fade" transparent={true} visible={modalVisible}>
      <View style={styles.modalBackground}>
        <View style={styles.modalContainer}>{children}</View>
      </View>
    </Modal>
  );
};

export default ModalComponent;
