
import React, { useContext, useEffect, useState } from 'react';

import { Alert, Text, TouchableOpacity, View, Platform } from 'react-native';
import { Avatar, TextInput } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';
import { Camera } from 'expo-camera';
import { Ionicons } from '@expo/vector-icons';
import firebase from 'firebase';;

import { colors } from '../../../../styles';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { CurrentPictureContext } from '../../../../contexts/CurrentPictureContext';

const ModalContent = ({ modalVisible, setModalVisible, photo }) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState();

  const { picture } = useContext(CurrentPictureContext);


  useEffect(() => {
    if (picture !== null && picture !== undefined){
      setImage(picture);
    }
  }, [])

  const navigation = useNavigation();

  const askForGalleryPermissions = async () => {
    if (Platform.OS !== 'web') {
      const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('É necessário dar permissão de acesso à câmera!');
      } else {
        pickImage();
      }
    }
  }

  const askForCameraPermissions = async () => {
    const { status } = await Camera.requestPermissionsAsync();
    if (status === 'granted') {
      setModalVisible(false);
      navigation.navigate('Camera')
    } 
    
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const saveTheme = async () => {

    const { currentUser } = firebase.auth();

     return await firebase
      .database()
      .ref(`/users/${currentUser.uid}/themes`)
      .push({
        title: text,
        image: image || '',
        topics: [],
      }).then(() => {
        setModalVisible(!modalVisible)
      })
  }

  const handleAddPicture = () => {
    Alert.alert('Adicionar capa', 'De onde você quer pegar a imagem?',
      [
        {
          text: 'Abrir Câmera',
          onPress: () => askForCameraPermissions()
        },
        {
          text: 'Escolher na Galeria',
          onPress: () => askForGalleryPermissions()
        },
      ]
    )
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
      <Text style={styles.modalTitle}>Adicionar Tema</Text>
      <TouchableOpacity onPress={() => {
        handleAddPicture();
        }}>
        {image ? (
          <Avatar.Image
            source={{uri: image}}
            size={80}
          /> ) : (
            <Avatar.Image
            source={require('../../../../../assets/add-photo.png')}
            size={80}
            />
        )}
      <Text style={styles.addPictureText}>Adicionar Capa</Text>
      </TouchableOpacity>
      <Text >TÍTULO</Text>
      <TextInput
        style={{ height: 36, paddingVertical: 5, width: '100%', marginBottom: 20 }}
        mode="outlined"
        label=""
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
          onPress={() => saveTheme()}
        >
          <Text style={{ color: colors.White }}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ModalContent;
