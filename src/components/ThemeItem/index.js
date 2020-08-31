import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-paper';
import styles from './styles';

const ThemeItem = ({ item, navigation, isMyProfile }) => {
  return (
    <TouchableOpacity
      style={styles.themeContainer}
      onPress={() =>
        navigation.navigate('ThemeTopics', {
          picture: item.themePicture,
          name: item.themeName,
          isMyProfile: isMyProfile,
        })
      }
    >
      <Avatar.Image
        source={{
          uri: item.themePicture,
        }}
        size={30}
        style={styles.themeImage}
      />
      <Text style={styles.themeName} numberOfLines={2} ellipsizeMode="tail">
        {item.themeName}
      </Text>
    </TouchableOpacity>
  );
};

export default ThemeItem;
