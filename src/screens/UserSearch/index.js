import React, { useEffect, useState } from 'react';

import { FlatList, View, Image } from 'react-native';
import firebase from 'firebase'
import { Searchbar } from 'react-native-paper';

import SearchBackgroundIcon from '../../../assets/icons/search-default-bg.svg';
import SearchListItem from '../../components/SearchListItem';
import BackgroundIconAndMessage from '../../components/UI/BackgroundIconAndMessage';
import Message from '../../../assets/soon-functionality.png'
import styles from './styles';

const UserSearch = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState();

  useEffect(() => {
    getUsers();
  }, [])

  useEffect(() => {
    if (users) console.log(users)
  }, [users])

  const getUsers = async () => {

    try{
  
    return await firebase
      .database()
      .ref(`users`)
      .on('value', snapshot => {
         const users = snapshot.val();
         console.log('snapshot users:', users)
         setUsers(users);
      })
    } catch(err){
      console.log(err)
    }
  }

  return (
    <View style={styles.background}>
      <Image source={Message} style={{alignSelf: 'center'}} />
      {/* <Searchbar
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
              onPressTheme={() =>
                navigation.navigate('UserProfile', {
                  userId: item.id,
                  userName: item.name,
                  userPhoto: item.picture,
                  isMyProfile: false,
                })
              }
              item={item}
              subtitleItems={item.themes}
              lastItem={index === mockUsers.length - 1 ? true : false}
            />
          )}
        />
      ) : (
        <BackgroundIconAndMessage message="Digite o nome de algum usuário">
          <SearchBackgroundIcon style={styles.backgroundIcon} />
        </BackgroundIconAndMessage>
      )} */}
    </View>
  );
};

export default UserSearch;
