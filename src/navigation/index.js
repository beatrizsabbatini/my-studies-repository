import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import MainTabs from './MainTabs';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator headerMode={'none'}>
      <Stack.Screen name="MainTabs" component={MainTabs} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
