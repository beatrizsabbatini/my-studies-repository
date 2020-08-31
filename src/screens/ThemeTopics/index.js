import { FontAwesome5, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../styles';
import styles from './styles';

const ThemeTopics = ({ navigation, route }) => {
  const [topButtonMessage, setTopButtonMessage] = useState('');
  const mockTopics = [
    {
      topicId: 1,
      name: 'Animações',
      color: colors.Yellow,
    },
    {
      topicId: 2,
      name: 'Formulários',
      color: colors.Green,
    },
    {
      topicId: 3,
      name: 'Regex Importantes',
      color: colors.Purple,
    },
    {
      topicId: 4,
      name: 'Navegação',
      color: colors.Red,
    },
  ];

  const { isMyProfile } = route.params;

  useEffect(() => {
    if (isMyProfile) {
      setTopButtonMessage('Adicionar tópico');
    } else {
      setTopButtonMessage('Copiar tema para sua biblioteca');
    }
  }, [isMyProfile]);

  return (
    <View style={styles.background}>
      <TouchableOpacity style={styles.button}>
        {isMyProfile ? (
          <Ionicons name="md-add" size={18} color={colors.White} />
        ) : (
          <MaterialIcons name="content-copy" size={18} color={colors.White} />
        )}

        <Text style={styles.buttonText}>{topButtonMessage}</Text>
      </TouchableOpacity>

      <FlatList
        style={styles.list}
        data={mockTopics}
        keyExtractor={(item) => item.topicId.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.listItem} onPress={() => {}}>
            <View style={styles.circleAndTitle}>
              <View style={[styles.circle, { backgroundColor: item.color }]} />
              <Text style={styles.topicName}>{item.name}</Text>
            </View>
            <FontAwesome5 name="eye" size={15} color={colors.TextGrey} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default ThemeTopics;
