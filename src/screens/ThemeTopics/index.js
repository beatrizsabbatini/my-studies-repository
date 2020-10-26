import React, { useEffect, useState, useContext } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { View, ActivityIndicator } from 'react-native';
import firebase from 'firebase';

import { colors } from '../../styles';
import styles from './styles';
import Modal from '../../components/UI/Modal';
import { EditThemeModalContext } from '../../contexts/EditThemeModalContext';
import ManageTopicModalContent from '../../components/ManageTopicModalContent';
import { getMyTopicsRequest, getMyTopicsSuccess } from '../../store/ducks/myTopics';
import ManageThemeModalContent from '../../components/ManageThemeModalContent';
import TopicsList from './components/TopicsList';
import EditButton from './components/EditButton';
import AddButton from './components/AddButton';

const ThemeTopics = ({ route }) => {
  const { isMyProfile } = route.params;
  const { item } = route.params;
  const theme = item;

  const [keys, setKeys] = useState();
  const [topicsWithId, setTopicsWithId] = useState();
  const [isEditModal, setIsEditModal] = useState();
  const [manageTopicModalOpen, setManageTopicModalOpen] = useState(false);
  const [topic, setTopic] = useState();

  const { editThemeModalOpen, setEditThemeModalOpen } = useContext(EditThemeModalContext);
  const dispatch = useDispatch()
  const topics = useSelector(state => state.myTopics.topics)
  const loading = useSelector(state => state.myTopics.loading)

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

  return (
    <>
      <View style={styles.background}>
          {isMyProfile && (
            <>
              <EditButton />
              {isMyProfile && (
                <AddButton setManageTopicModalOpen={setManageTopicModalOpen} setTopic={setTopic} setIsEditModal={setIsEditModal} />
              )}
            </>
          )}
      
          {loading ? (
            <ActivityIndicator size="large" style={{flex: 1, alignSelf: 'center'}} color={colors.Purple} />
          ) : (
            <TopicsList theme={theme} topicsWithId={topicsWithId} setTopic={setTopic} setIsEditModal={setIsEditModal} setManageTopicModalOpen={setManageTopicModalOpen} />
          )}
        
      </View>
      <Modal modalVisible={editThemeModalOpen}>
        <ManageThemeModalContent isEdit theme={theme} modalVisible={editThemeModalOpen} setModalVisible={setEditThemeModalOpen} />
      </Modal>
      <Modal modalVisible={manageTopicModalOpen}>
        <ManageTopicModalContent topic={topic} isEditModal={isEditModal} themeId={item.id} modalVisible={manageTopicModalOpen} setModalVisible={setManageTopicModalOpen} />
      </Modal>
    </>
  );
};

export default ThemeTopics;
