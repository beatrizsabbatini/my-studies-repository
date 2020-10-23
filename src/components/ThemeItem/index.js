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
          image: item.image,
          name: item.themeName,
          isMyProfile: isMyProfile,
          item: item,
        })
      }
    >
      {item.image ? (
        <Avatar.Image
        source={{uri: item.image}}
        size={40}
      />
      ) : (
        <Avatar.Image
          source={require('../../../assets/add-photo.png')}
          size={40}
        />
      )}
      <Text style={styles.themeName} numberOfLines={2} ellipsizeMode="tail">
        {item.title}
      </Text>
    </TouchableOpacity>
  );
};

export default ThemeItem;
