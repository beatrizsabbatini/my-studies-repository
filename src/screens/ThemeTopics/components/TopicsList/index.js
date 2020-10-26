import React from 'react';

import { View, FlatList, TouchableOpacity, Text } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';
import { colors, metrics } from '../../../../styles';

const TopicsList = ({topicsWithId, setIsEditModal, setTopic, setManageTopicModalOpen, theme}) => {

  const navigation = useNavigation();

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

  return (
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
  )
}

export default TopicsList;