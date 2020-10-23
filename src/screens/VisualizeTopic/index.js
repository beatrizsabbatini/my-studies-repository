import React, { useContext, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import firebase from 'firebase';
import { View, Text, FlatList,Linking, ActivityIndicator, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 

import styles from './styles';
import { colors } from '../../styles';
import ModalComponent from '../../components/UI/Modal';
import ManageReferenceModalContent from '../../components/ManageReferenceModalContent';
import { getMyReferencesRequest, getMyReferencesSuccess } from '../../store/ducks/myReferences';
import { useNavigation } from '@react-navigation/native';

const VisualizeTopic = ({ route }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [keys, setKeys] = useState();
  const [referencesWithId, setReferencesWithId] = useState();
  const [isEdit, setIsEdit] = useState(false);
  const [reference, setReference] = useState();

  const { themeId, topicId, item } = route.params;
  const { currentUser } = firebase.auth();

  const dispatch = useDispatch()
  const references = useSelector(state => state.myReferences.references)
  const loading = useSelector(state => state.myReferences.loading)
  const navigation = useNavigation();

  useEffect(() => {
    getMyReferencesService()
  }, [])

  useEffect(() => {
    if (references){
      setKeys(Object.keys(references));
    }
  }, [references])

  useEffect(() => {
    if (keys && references){
      const refsWithId = keys.map(key => {
        return {...references[key], id: key}
      })
      setReferencesWithId(refsWithId)
    }
  }, [keys])

  const getMyReferencesService = async () => {
    dispatch(getMyReferencesRequest()); 

    return await firebase
      .database()
      .ref(`users/${currentUser.uid}/themes/${themeId}/topics/${topicId}/references`)
      .on('value', snapshot => {
         const themes = snapshot.val();
         dispatch(getMyReferencesSuccess(themes)); 
      })
  }

  const deleteReferenceService = async (ref) =>{

    try {
      await firebase
        .database()
        .ref(`/users/${currentUser.uid}/themes/${themeId}/topics/${topicId}/references/${ref.id}`)
        .remove()
        .then(() => {
          setModalVisible(false);
          navigation.goBack();
          Alert.alert('Sucesso!', 'Referência deletada com sucesso.')
        }) 
    } catch(err){
          console.log(err);
          Alert.alert('Erro!', 'Não foi possível deletar, verifique sua conexão à internet.')
    }

  }

  return (
    <>
    
    {loading ? (
        <ActivityIndicator size="large" style={{flex: 1, alignSelf: 'center'}} color={colors.Purple} />
    ) : (
          <>
            <View style={styles.background}>
              <TouchableOpacity 
                style={styles.addButton} 
                onPress={() => {
                  setReference({});
                  setIsEdit(false);
                  setModalVisible(true);
              }}>
                  <Ionicons name="ios-add-circle" size={34} color={colors.Purple}/>
                  <Text style={styles.title}>Adicionar Referência</Text>
              </TouchableOpacity>
              <FlatList 
                keyExtractor={item => item.id.toString()} 
                showsVerticalScrollIndicator={false}
                data={referencesWithId || []} 
                style={{paddingTop: 10}}
                renderItem={({ item }) => (
                  <View style={styles.referenceContainer}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                      <TouchableOpacity onPress={() => Linking.openURL(item.url)} style={styles.accessButton}>
                        <Text style={styles.link}>Clique para acessar</Text>
                      </TouchableOpacity>
                      <View style={styles.bottomContainer}>
                      <TouchableOpacity 
                        onPress={() => {
                        setReference(item);
                        setIsEdit(true);
                        setModalVisible(true);
                        }} 
                        style={styles.editButton}>
                        <Feather name="edit" size={15} color={colors.Purple}/>
                        <Text style={styles.editButtonText}>Editar</Text>
                      </TouchableOpacity>
                      <TouchableOpacity 
                        style={styles.bottomContainer} 
                        onPress={() => {
                          Alert.alert(
                            'Deseja mesmo excluir esse tópico?','',
                            [
                              {
                                text: 'Sim',
                                onPress: () => deleteReferenceService(item),
                              },
                              {
                                text: 'Não',
                                onPress: () => {},
                              },
                            ]
                          );
                        }}>
                        <Feather name="trash-2" size={17} color={colors.Red} />
                        <Text style={styles.removeButton}>Remover</Text>
                      </TouchableOpacity>
                      </View>
                  </View>
               )} />
          
            </View>
            <ModalComponent modalVisible={modalVisible}>
              <ManageReferenceModalContent isEdit={isEdit} reference={reference} themeId={themeId} topicId={topicId} modalVisible={modalVisible} setModalVisible={setModalVisible} />
            </ModalComponent>
        </>)}
    </>
  )
}

export default VisualizeTopic;