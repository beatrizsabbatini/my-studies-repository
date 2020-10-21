import { Ionicons } from '@expo/vector-icons';
import firebase from 'firebase';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, TouchableOpacity, View, Alert } from 'react-native';
import { Avatar, TextInput } from 'react-native-paper';
import { colors } from '../../../../styles';
import styles from './styles';

const EditThemeModalContent = ({ modalVisible, setModalVisible, item }) => {
  const [text, setText] = useState('');
  const navigation = useNavigation();

  const updateThemeService = async () => {
    const { currentUser } = firebase.auth();

    return await firebase
      .database()
      .ref(`/users/${currentUser.uid}/themes/${item.id}`)
      .set({
        title: text,
      }).then(() => {
        setModalVisible(false);
        navigation.goBack();
        Alert.alert('Sucesso!', 'Tema alterado com sucesso.')
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
      <Text style={styles.modalTitle}>Editar Tema</Text>
      <TouchableOpacity>
        <Avatar.Image
          source={require('../../../../../assets/add-photo.png')}
          size={80}
        />
      </TouchableOpacity>
      <Text style={styles.addPictureText}>Adicionar Capa</Text>
      <Text >TÍTULO</Text>
      <TextInput
        style={{ height: 30, width: '100%', marginBottom: 20 }}
        mode="outlined"
        label=""
        placeholder={item.title}
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
          disabled={text.length == 0}
          style={[styles.button, styles.save, text.length == 0 && {opacity: 0.3}]}
          onPress={() => updateThemeService()}
        >
          <Text style={{ color: colors.White }}>Salvar</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => {}}
        >
          <Text style={[styles.deleteText]}>Deletar Tema</Text>
        </TouchableOpacity>
    </>
  );
};

export default EditThemeModalContent;
