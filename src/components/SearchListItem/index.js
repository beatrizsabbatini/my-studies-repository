import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import { metrics } from '../../styles';
import styles from './styles';

const SearchListItem = ({
  item,
  lastItem,
  subtitleItems,
  onPressTheme,
  onPressProfile,
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
    <View
      style={[
        styles.itemAndUserContainer,
        lastItem && styles.lastItemContainer,
      ]}
    >
      <TouchableOpacity style={[styles.itemContainer]} onPress={onPressTheme}>
        <Avatar.Image
          source={{ uri: item.picture }}
          size={36}
          style={{ margin: metrics.smallMargin }}
        />

        <View style={styles.info}>
          <View style={styles.titleRow}>
            <Text style={styles.title}>{item.name}</Text>
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
      {userName && (
        <TouchableOpacity style={styles.userContainer} onPress={onPressProfile}>
          <Text style={styles.userName} numberOfLines={1} ellipsizeMode="tail">
            Tema de {userName}
          </Text>
          <Text style={[styles.userName, { textDecorationLine: 'underline' }]}>
            Ver Perfil
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default SearchListItem;
