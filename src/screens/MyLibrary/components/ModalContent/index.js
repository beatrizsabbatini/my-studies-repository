import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Avatar, TextInput } from 'react-native-paper';
import { colors } from '../../../../styles';
import styles from './styles';

const ModalContent = ({ modalVisible, setModalVisible }) => {
  const [text, setText] = useState();

  return (
    <>
      <Ionicons
        name="ios-close"
        size={30}
        color={colors.Purple}
        style={styles.closeIcon}
        onPress={() => setModalVisible(!modalVisible)}
      />
      <Text style={styles.modalTitle}>Adicionar Tema</Text>
      <TouchableOpacity>
        <Avatar.Image
          source={require('../../../../../assets/add-photo.png')}
          size={80}
        />
      </TouchableOpacity>
      <Text style={styles.addPictureText}>Adicionar Capa</Text>
      <TextInput
        style={{ height: 30, width: '100%' }}
        mode="flat"
        label="Título"
        value={text}
        onChangeText={(text) => setText(text)}
        theme={{ colors: { primary: colors.Purple } }}
      />
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={[styles.cancel]}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.save]}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={{ color: colors.White }}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ModalContent;
