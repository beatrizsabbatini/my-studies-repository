import { SimpleLineIcons } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { Text, View } from 'react-native';
import { Avatar } from 'react-native-paper';
import Button from '../../../components/UI/Button';
import { colors } from '../../../styles';
import styles from './styles';

const DrawerContent = ({ navigation }) => {
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
        onPress={() => navigation.navigate('Login')}
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
