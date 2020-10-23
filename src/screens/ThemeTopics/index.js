import React, { useEffect, useState, useContext } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { Ionicons, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';
import { FlatList, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';

import { colors, metrics } from '../../styles';
import styles from './styles';
import Modal from '../../components/UI/Modal';
import EditThemeModalContent from './components/EditThemeModalContent';
import { EditThemeModalContext } from '../../contexts/EditThemeModalContext';
import ManageTopicModalContent from '../../components/ManageTopicModalContent';
import { getMyTopicsRequest, getMyTopicsSuccess } from '../../store/ducks/myTopics';

const ThemeTopics = ({ route }) => {
  //const [topButtonMessage, setTopButtonMessage] = useState('');
  const { editThemeModalOpen, setEditThemeModalOpen } = useContext(EditThemeModalContext);

  const { isMyProfile } = route.params;
  const { item } = route.params;
  const theme = item;
  
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const topics = useSelector(state => state.myTopics.topics)
  const loading = useSelector(state => state.myTopics.loading)

  const [keys, setKeys] = useState();
  const [topicsWithId, setTopicsWithId] = useState();
  const [isEditModal, setIsEditModal] = useState();
  const [manageTopicModalOpen, setManageTopicModalOpen] = useState(false);
  const [topic, setTopic] = useState();

  useEffect(() => {
    getTopicsService()
  }, [])

  useEffect(() => {
    if (topics){
      setKeys(Object.keys(topics));
    }
  }, [topics])

  useEffect(() => {
    if (keys && topics){
      const topicsWithId = keys.map(key => {
        return {...topics[key], id: key}
      })
      setTopicsWithId(topicsWithId)
    }
  }, [keys])

  const getTopicsService = async () => {
    const { currentUser } = firebase.auth();
    dispatch(getMyTopicsRequest()); 

    return await firebase
      .database()
      .ref(`users/${currentUser.uid}/themes/${item.id}/topics`)
      .on('value', snapshot => {
         const topics = snapshot.val();
         dispatch(getMyTopicsSuccess(topics)); 
      })
  }

  function getBackgroundColor(color){

    switch (color) {
      case 'red':
        return colors.Red   

      case 'yellow':
        return colors.Yellow

      case 'green':
        return colors.Green

      case 'purple':
        return colors.Purple

      default:
        break;
    }

  }

  // useEffect(() => {
  //   if (isMyProfile) {
  //     setTopButtonMessage('Adicionar tópico');
  //   } else {
  //     setTopButtonMessage('Copiar tema para sua biblioteca');
  //   }
  // }, [isMyProfile]);

  return (
    <>
      <View style={styles.background}>
        
          {/* {isMyProfile ? (
            <Ionicons name="md-add" size={18} color={colors.White} />
          ) : (
            <MaterialIcons name="content-copy" size={18} color={colors.White} />
          )} */}
          {isMyProfile && (
            <>
              <TouchableOpacity style={styles.editButton} onPress={() => 
                  setEditThemeModalOpen(!editThemeModalOpen)
                }>
                <Ionicons name="md-add" size={18} color={colors.White} />
                <Text style={styles.buttonEditText}>EDITAR TEMA</Text>
              </TouchableOpacity>
              {isMyProfile && (
                <TouchableOpacity style={styles.button} onPress={() => {
                  setTopic({});
                  setIsEditModal(false);
                  setManageTopicModalOpen(true);
                }}>
                <Ionicons name="md-add" size={18} color={colors.White} />
                <Text style={styles.buttonText}>Adicionar tópico</Text>
              </TouchableOpacity>
              )}
              
            </>
          )}
      
          {loading ? (
            <ActivityIndicator size="large" style={{flex: 1, alignSelf: 'center'}} color={colors.Purple} />
          ) : (
            <FlatList
              style={styles.list}
              data={topicsWithId || []}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity style={styles.listItem} onPress={() => navigation.navigate('VisualizeTopic', 
                {themeId: theme.id,
                  topicId: item.id,
                  item: item
                })}>
                  <View style={styles.circleAndTitle}>
                    <View style={[styles.circle, { backgroundColor: getBackgroundColor(item.color) }]} />
                    <Text style={styles.topicName}>{item.title}</Text>
                  </View>
                  <TouchableOpacity onPress={() => {
                    setTopic(item);
                    setIsEditModal(true);
                    setManageTopicModalOpen(true);
                    }}>
                    <Feather 
                      name="edit" 
                      size={20} 
                      color={colors.Purple} 
                      style={{ paddingRight: metrics.doubleBaseMargin }} />
                  </TouchableOpacity>
                </TouchableOpacity>
              )}
            />
          )}
        
      </View>
      <Modal modalVisible={editThemeModalOpen}>
        <EditThemeModalContent item={item} modalVisible={editThemeModalOpen} setModalVisible={setEditThemeModalOpen} />
      </Modal>
      <Modal modalVisible={manageTopicModalOpen}>
        <ManageTopicModalContent topic={topic} isEditModal={isEditModal} themeId={item.id} modalVisible={manageTopicModalOpen} setModalVisible={setManageTopicModalOpen} />
      </Modal>
    </>
  );
};

export default ThemeTopics;
