import { SimpleLineIcons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { Text, TouchableOpacity, View } from 'react-native';
import { Avatar, TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import Button from '../../../components/UI/Button';
import { colors } from '../../../styles';
import styles from './styles';
import { getMyReferencesSuccess } from '../../../store/ducks/myReferences';
import { getThemesSuccess } from '../../../store/ducks/myThemes';
import { getMyTopicsSuccess } from '../../../store/ducks/myTopics';

const DrawerContent = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = firebase.auth().currentUser;
  const [userName, setUserName] = useState('')

  useEffect(() => {
    if (user) {
      if (user.displayName !== null) setUserName(user.displayName)
    }
  }, [user])

  const resetReduxStates = () => {
    dispatch(getMyReferencesSuccess(undefined));
    dispatch(getMyTopicsSuccess(undefined));
    dispatch(getThemesSuccess(undefined));
  }

  const changeUserName = async () => {
    try {
    await user.updateProfile({
      displayName: userName
    })
    navigation.closeDrawer();
    } catch(err){
      console.log(err)
    }
    setUserName('')
  }

  return (
    <View style={styles.drawerBackground}>
      <DrawerContentScrollView>
        <View style={styles.userInfo}>
        <Text style={styles.nameTitle}>{user ? user.displayName : ''}</Text>
        <Text style={{color:colors.Purple}}>Edite seu nome usuário abaixo:</Text>
        <TextInput
        style={{ height: 30, width: '100%', marginBottom: 20 }}
        mode="outlined"
        placeholder={userName}
        value={userName}
        onChangeText={(text) => setUserName(text)}
        theme={{ colors: { primary: colors.Purple } }}
        />
        <TouchableOpacity onPress={() => changeUserName()}>
          <Text style={{color:colors.Purple, textDecorationLine: 'underline'}}>Salvar nome</Text>
        </TouchableOpacity>
        </View>
      </DrawerContentScrollView>

      <DrawerItem
        onPress={() => {
          resetReduxStates();
          navigation.navigate('Login')
        }}
        inactiveBackgroundColor={colors.Purple}
        inactiveTintColor={colors.White}
        label="Sair"
        icon={() => (
          <SimpleLineIcons name="logout" size={24} color={colors.White} />
        )}
      />
    </View>
  );
};

export default DrawerContent;
