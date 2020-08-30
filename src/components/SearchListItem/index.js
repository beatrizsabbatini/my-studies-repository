import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import { metrics } from '../../styles';
import styles from './styles';

const SearchListItem = ({
  item,
  lastItem,
  subtitleItems,
  onPress,
  userName,
}) => {
  function renderItems() {
    return subtitleItems.map((theme, index) => (
      <Text key={index}>
        {theme}
        {index !== subtitleItems.length - 1 && ', '}
      </Text>
    ));
  }

  return (
    <TouchableOpacity
      style={[styles.itemContainer, lastItem && styles.lastItemContainer]}
      onPress={onPress}
    >
      <Avatar.Image
        source={{ uri: item.picture }}
        size={36}
        style={{ margin: metrics.smallMargin }}
      />

      <View style={styles.info}>
        <View style={styles.titleRow}>
          <Text style={styles.title}>{item.name}</Text>
          {userName && (
            <Text
              style={styles.userName}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              Tema de {userName}
            </Text>
          )}
        </View>
        <Text style={styles.subtitle} numberOfLines={1} ellipsizeMode="tail">
          Temas salvos:
          <Text
            style={styles.subtitleItems}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {' '}
            {renderItems()}
          </Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SearchListItem;
