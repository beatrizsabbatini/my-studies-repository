import React, { useState, useEffect } from 'react';

import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import firebase from 'firebase';
import { TextInput } from 'react-native-paper';

import { colors } from '../../styles';
import styles from './styles';

const ManageReferenceModalContent = ({ modalVisible, setModalVisible, themeId, topicId, isEdit, reference }) => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');

  const { currentUser } = firebase.auth();

  useEffect(() => {
    if (reference){
      setTitle(reference.title);
      setLink(reference.url)
    }
  }, [])

  const createReferenceService = async () => {

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

  const updateReferenceService = async () => {

     return await firebase
      .database()
      .ref(`/users/${currentUser.uid}/themes/${themeId}/topics/${topicId}/references/${reference.id}`)
      .set({
        title: title,
        url: link
      }).then(() => {
        setModalVisible(!modalVisible)
        Alert.alert('Sucesso!', 'Referência atualizada.');
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
      <Text style={styles.modalTitle}>{isEdit ? 'EDITAR' : 'ADICIONAR'} REFERÊNCIA</Text>

      <Text >TÍTULO</Text>
      <TextInput
        style={{ height: 30, width: '100%', marginBottom: 20 }}
        mode="outlined"
        label=""
        placeholder={reference.title || ''}
        value={title}
        onChangeText={(text) => setTitle(text)}
        theme={{ colors: { primary: colors.Purple } }}
      />

      <Text >LINK</Text>
      <TextInput
        style={{ height: 30, width: '100%', marginBottom: 20 }}
        mode="outlined"
        label=""
        placeholder={reference.url || ''}
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
          disabled={title == '' || link == ''}
          style={[styles.button, styles.save, title == '' || link == '' && {opacity: 0.3}]}
          onPress={() => {
            if (isEdit) {
              updateReferenceService()
            }else{
            createReferenceService()
            }
          }}
        >
          <Text style={{ color: colors.White }}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ManageReferenceModalContent;
