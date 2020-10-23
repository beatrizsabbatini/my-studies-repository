import React, { useEffect, useState } from 'react';

import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';
import { TextInput } from 'react-native-paper';
import { useSelector } from 'react-redux';

import { colors } from '../../styles';
import ColorBox from '../ColorBox';
import styles from './styles';

const ManageTopicModalContent = ({ modalVisible, setModalVisible, themeId, isEditModal, topic }) => {
  const [text, setText] = useState('');
  const [redSelected, setRedSelected] = useState(true);
  const [greenSelected, setGreenSelected] = useState(false);
  const [yellowSelected, setYellowSelected] = useState(false);
  const [purpleSelected, setPurpleSelected] = useState(false);
  const [colorChosen, setColorChosen] = useState('red');

  const myReferences = useSelector(state => state.myReferences.references)
  const navigation = useNavigation();

  const { currentUser } = firebase.auth();

  useEffect(() => {
    if (topic){
      setText(topic.title);
    }
  }, [])

  const createTopicService = async () => {
   
     return await firebase
      .database()
      .ref(`/users/${currentUser.uid}/themes/${themeId}/topics`)
      .push({
        title: text,
        color: colorChosen
      }).then(() => {
        setModalVisible(false)
      })
  }

  const editTopicService = async () => {

    return await firebase
     .database()
     .ref(`/users/${currentUser.uid}/themes/${themeId}/topics/${topic.id}`)
     .set({
       title: text,
       color: colorChosen,
       references: myReferences || []
     }).then(() => {
       setModalVisible(false);
       Alert.alert('Tópico atualizado com sucesso!')
     })
 }

 const deleteTopicService = async () =>{

  try {
    await firebase
      .database()
      .ref(`/users/${currentUser.uid}/themes/${themeId}/topics/${topic.id}`)
      .remove()
      .then(() => {
        setModalVisible(false);
        navigation.goBack();
        Alert.alert('Sucesso!', 'Tópico deletado com sucesso.')
      }) 
  } catch(err){
        console.log(err);
        Alert.alert('Erro!', 'Não foi possível deletar, verifique sua conexão à internet.')
  }

 }

  function clearColors(){
    setRedSelected(false);
    setGreenSelected(false);
    setYellowSelected(false);
    setPurpleSelected(false);
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
      <Text style={styles.modalTitle}>{`${isEditModal ? 'EDITAR' : 'ADICIONAR'}`} TÓPICO</Text>

      <Text >TÍTULO</Text>
      <TextInput
        style={{ height: 30, width: '100%', marginBottom: 20 }}
        mode="outlined"
        label=""
        placeholder={topic ? topic.title : ''}
        value={text}
        onChangeText={(text) => setText(text)}
        theme={{ colors: { primary: colors.Purple } }}
      />
      <Text >ESCOLHA A COR PARA ESTE TÓPICO</Text>
      <View style={styles.colorsContainer}>
        <TouchableOpacity onPress={() => {
          clearColors();
          setRedSelected(true);
          setColorChosen('red');
        }}>
          <ColorBox backgroundColor={colors.Red} isSelected={redSelected}/>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => {
          clearColors();
          setGreenSelected(true);
          setColorChosen('green');
        }}>
          <ColorBox backgroundColor={colors.Green} isSelected={greenSelected}/>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => {
          clearColors();
          setYellowSelected(true);
          setColorChosen('yellow');
        }}>
          <ColorBox backgroundColor={colors.Yellow} isSelected={yellowSelected}/>
        </TouchableOpacity>
        <TouchableOpacity  onPress={() => {
          clearColors();
          setPurpleSelected(true);
          setColorChosen('purple');
        }}>
          <ColorBox backgroundColor={colors.Purple} isSelected={purpleSelected}/>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(!modalVisible)}
        >
          <Text style={[styles.cancel]}>Cancelar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          disabled={text == ''}
          style={[styles.button, styles.save, text == '' && {opacity: 0.3}]}
          onPress={() => {
            if (isEditModal){
              editTopicService()
            } else {
              createTopicService()
            }
          }}
        >
          <Text style={{ color: colors.White }}>Salvar</Text>
        </TouchableOpacity>
      </View>
      {isEditModal && (
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => deleteTopicService()}
        >
        <Text style={styles.deleteText}>DELETAR TÓPICO</Text>
      </TouchableOpacity>
      )}
    </>
  );
};

export default ManageTopicModalContent;

