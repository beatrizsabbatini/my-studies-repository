import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { Searchbar } from 'react-native-paper';
import SearchListItem from '../../components/SearchListItem';
import styles from './styles';

const ThemeSearch = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const mockThemes = [
    {
      themeId: 12,
      userId: 1,
      name: 'React Native',
      createdBy: 'Matheus Oliveira Pereira',
      creatorNickname: 'Matheus',
      someTopics: [
        'Animações',
        'Push Notifications',
        'Formulários',
        'Bibliotecas Úteis',
      ],
      picture: 'https://miro.medium.com/max/400/1*mrOXGyIa3BlPK80peLmEbA.png',
    },
    {
      userId: 2,
      themeId: 10,
      name: 'React Native',
      createdBy: 'Beatriz Schwartz',
      creatorNickname: 'Beatriz',
      someTopics: ['Gráficos', 'React Navigation', 'Formulários', 'SVGs'],
      picture:
        'data:image/png;base64,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',
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
      <FlatList
        style={styles.list}
        data={mockThemes}
        keyExtractor={(item) => item.themeId.toString()}
        renderItem={({ item, index }) => (
          <SearchListItem
            onPress={() =>
              navigation.navigate('ThemeTopics', {
                picture: item.picture,
                name: item.name,
                isSearchTheme: true,
                item: item,
              })
            }
            userName={item.createdBy}
            item={item}
            subtitleItems={item.someTopics}
            lastItem={index === mockThemes.length - 1 ? true : false}
          />
        )}
      />
    </View>
  );
};

export default ThemeSearch;
