import React from 'react';

import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';
import { colors } from '../../../../styles';

const AddButton = ({setManageTopicModalOpen, setTopic, setIsEditModal }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => {
      setTopic({});
      setIsEditModal(false);
      setManageTopicModalOpen(true);
    }}>
    <Ionicons name="md-add" size={18} color={colors.White} />
    <Text style={styles.buttonText}>Adicionar tópico</Text>
  </TouchableOpacity>
  )
}

export default AddButton;