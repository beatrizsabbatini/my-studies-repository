import { Ionicons } from '@expo/vector-icons';
import firebase from 'firebase';
import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from '../../../../styles';
import styles from './styles';

const AddReferenceModalContent = ({ modalVisible, setModalVisible, themeId, topicId }) => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');

  const createReferenceService = async () => {
    const { currentUser } = firebase.auth();

     return await firebase
      .database()
      .ref(`/users/${currentUser.uid}/themes/${themeId}/topics/${topicId}/references`)
      .push({
        title: title,
        url: link
      }).then(() => {
        setModalVisible(!modalVisible)
      })
  }

  return (
    <>
      <Ionicons
        name="ios-close"
        size={30}
        color={colors.Purple}
        style={styles.closeIcon}
        onPress={() => setModalVisible(!modalVisible)}
      />
      <Text style={styles.modalTitle}>ADICIONAR REFERÊNCIA</Text>

      <Text >TÍTULO</Text>
      <TextInput
        style={{ height: 30, width: '100%', marginBottom: 20 }}
        mode="outlined"
        label=""
        value={title}
        onChangeText={(text) => setTitle(text)}
        theme={{ colors: { primary: colors.Purple } }}
      />

      <Text >LINK</Text>
      <TextInput
        style={{ height: 30, width: '100%', marginBottom: 20 }}
        mode="outlined"
        label=""
        value={link}
        onChangeText={(text) => setLink(text)}
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
          disabled={title.length == 0 || link.length == 0}
          style={[styles.button, styles.save,title.length == 0 || link.length == 0 && {opacity: 0.3}]}
          onPress={() => createReferenceService()}
        >
          <Text style={{ color: colors.White }}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AddReferenceModalContent;
