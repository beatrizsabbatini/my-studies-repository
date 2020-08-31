import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import LoginNavigator from '../LoginStack';
import MainTabs from '../MainTabs';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={({ navigation }) => (
        <DrawerContent navigation={navigation} />
      )}
    >
      <Drawer.Screen name="Login" component={LoginNavigator} />
      <Drawer.Screen name="MainTabs" component={MainTabs} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
