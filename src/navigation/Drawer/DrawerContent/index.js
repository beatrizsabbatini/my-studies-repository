import { SimpleLineIcons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import Button from '../../../components/UI/Button';
import { colors } from '../../../styles';
import styles from './styles';
import { getMyReferencesSuccess } from '../../../store/ducks/myReferences';
import { getThemesSuccess } from '../../../store/ducks/myThemes';
import { getMyTopicsSuccess } from '../../../store/ducks/myTopics';

const DrawerContent = ({ navigation }) => {
  const dispatch = useDispatch();

  const resetReduxStates = () => {
    dispatch(getMyReferencesSuccess(undefined));
    dispatch(getMyTopicsSuccess(undefined));
    dispatch(getThemesSuccess(undefined));
  }

  return (
    <View style={styles.drawerBackground}>
      <DrawerContentScrollView>
        <View style={styles.userInfo}>
          <Avatar.Image
            size={70}
            source={{ uri: `https://api.adorable.io/avatars/${Math.random()}` }}
          />
          <Text style={styles.userName}>Beatriz Schwartz</Text>
          <Button
            buttonText="Editar perfil"
            width="90%"
            backgroundColor={colors.White}
            textColor={colors.Purple}
            borderColor={colors.Purple}
          />
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
