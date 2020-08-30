import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import SearchBackgroundIcon from '../../../assets/icons/search-default-bg.svg';
import BackgroundIconAndMessage from '../../components/BackgroundIconAndMessage';
import SearchListItem from '../../components/SearchListItem';
import styles from './styles';

const UserSearch = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const mockUsers = [
    {
      id: 1,
      name: 'Luis Guilherme Farias',
      picture: `https://api.adorable.io/avatars/${Math.random()}`,
      themes: ['Python', 'JavaScript', 'React JS'],
    },
    {
      id: 2,
      name: 'Beatriz Schwartz',
      picture: `https://api.adorable.io/avatars/${Math.random()}`,
      themes: ['React Native', 'JavaScript', 'React JS'],
    },
    {
      id: 3,
      name: 'Juliana Yukari',
      picture: `https://api.adorable.io/avatars/${Math.random()}`,
      themes: ['Java', 'JavaScript', 'React'],
    },
    {
      id: 4,
      name: 'Gilberto Falco',
      picture: `https://api.adorable.io/avatars/${Math.random()}`,
      themes: ['Java', 'JavaScript', 'React'],
    },
    {
      id: 5,
      name: 'Pedro Vinchi',
      picture: `https://api.adorable.io/avatars/${Math.random()}`,
      themes: ['Java', 'JavaScript', 'React'],
    },
    {
      id: 6,
      name: 'Lucas Carvalho',
      picture: `https://api.adorable.io/avatars/${Math.random()}`,
      themes: ['Java', 'JavaScript', 'React'],
    },
    {
      id: 7,
      name: 'Gabriela Soares',
      picture: `https://api.adorable.io/avatars/${Math.random()}`,
      themes: ['Java', 'JavaScript', 'React'],
    },
    {
      id: 8,
      name: 'Matheus Oliveira Pereira',
      picture: `https://api.adorable.io/avatars/${Math.random()}`,
      themes: ['Java', 'JavaScript', 'React'],
    },
    {
      id: 9,
      name: 'Beatriz Forcato Lima',
      picture: `https://api.adorable.io/avatars/${Math.random()}`,
      themes: ['Java', 'JavaScript', 'React'],
    },
  ];

  return (
    <View style={styles.background}>
      <Searchbar
        style={styles.searchBar}
        inputStyle={styles.input}
        placeholder="Search"
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
      />
      {mockUsers.length > 0 ? (
        <FlatList
          showsVerticalScrollIndicator={false}
          style={styles.list}
          data={mockUsers}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item, index }) => (
            <SearchListItem
              onPress={() =>
                navigation.navigate('UserProfile', {
                  userId: item.id,
                  userName: item.name,
                  userPhoto: item.picture,
                })
              }
              item={item}
              subtitleItems={item.themes}
              lastItem={index === mockUsers.length - 1 ? true : false}
            />
          )}
        />
      ) : (
        <BackgroundIconAndMessage message="Digite algo na barra de pesquisa">
          <SearchBackgroundIcon style={styles.backgroundIcon} />
        </BackgroundIconAndMessage>
      )}
    </View>
  );
};

export default UserSearch;
