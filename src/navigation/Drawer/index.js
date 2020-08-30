import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Text>Drawer Navigator!!!</Text>
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
