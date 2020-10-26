import React, { useContext } from 'react';

import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { colors } from '../../../../styles';
import styles from './styles';
import { EditThemeModalContext } from '../../../../contexts/EditThemeModalContext';

const EditButton = () => {
  const { editThemeModalOpen, setEditThemeModalOpen } = useContext(EditThemeModalContext);

  return (
    <TouchableOpacity style={styles.editButton} onPress={() => 
      setEditThemeModalOpen(!editThemeModalOpen)
    }>
    <Ionicons name="md-add" size={18} color={colors.White} />
    <Text style={styles.buttonEditText}>EDITAR TEMA</Text>
  </TouchableOpacity>
  )
}

export default EditButton;