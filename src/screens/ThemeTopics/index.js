import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import firebase from 'firebase';
import React, { useEffect, useState, useContext } from 'react';
import { FlatList, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { colors } from '../../styles';
import styles from './styles';
import Modal from '../../components/UI/Modal';
import EditThemeModalContent from './components/EditThemeModalContent';
import { EditThemeModalContext } from '../../contexts/EditThemeModalContext';
import AddAndEditTopicModalContent from '../../components/AddAndEditTopicModalContent';
import { AddTopicModalContext } from '../../contexts/AddTopicModalContext';
import { useDispatch, useSelector } from 'react-redux';
import { getMyTopicsRequest, getMyTopicsSuccess } from '../../store/ducks/myTopics';
import { useNavigation } from '@react-navigation/native';

const ThemeTopics = ({ route }) => {
  //const [topButtonMessage, setTopButtonMessage] = useState('');
  const { editThemeModalOpen, setEditThemeModalOpen } = useContext(EditThemeModalContext);
  const { addTopicModalOpen, setAddTopicModalOpen } = useContext(AddTopicModalContext);
  const { isMyProfile } = route.params;
  const { item } = route.params;
  const theme = item;
  
  const navigation = useNavigation();
  const dispatch = useDispatch()
  const topics = useSelector(state => state.myTopics.topics)
  const loading = useSelector(state => state.myTopics.loading)

  const [keys, setKeys] = useState();
  const [topicsWithId, setTopicsWithId] = useState();

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
                <TouchableOpacity style={styles.button} onPress={() => setAddTopicModalOpen(!addTopicModalOpen)}>
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
                  <FontAwesome5 name="eye" size={15} color={colors.TextGrey} />
                </TouchableOpacity>
              )}
            />
          )}
        
      </View>
      <Modal modalVisible={editThemeModalOpen}>
        <EditThemeModalContent item={item} modalVisible={editThemeModalOpen} setModalVisible={setEditThemeModalOpen} />
      </Modal>
      <Modal modalVisible={addTopicModalOpen}>
        <AddAndEditTopicModalContent themeId={item.id} modalVisible={addTopicModalOpen} setModalVisible={setAddTopicModalOpen} />
      </Modal>
    </>
  );
};

export default ThemeTopics;
