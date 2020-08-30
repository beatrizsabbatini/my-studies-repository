import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../../styles';
import styles from './styles';

const ThemeTopics = ({ navigation, route }) => {
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

  const { isSearchTheme, item } = route.params;

  return (
    <View style={styles.background}>
      {isSearchTheme && (
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('UserProfile', {
                userId: item.userId,
                userName: item.createdBy,
                userPhoto: item.picture,
              })
            }
            style={[styles.button, { backgroundColor: colors.Purple }]}
          >
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[styles.buttonText, { color: colors.White }]}
            >
              Outros temas de {item.creatorNickname}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: colors.White }]}
          >
            <Text style={[styles.buttonText, { color: colors.Purple }]}>
              Copiar tema para sua biblioteca
            </Text>
          </TouchableOpacity>
        </View>
      )}
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
