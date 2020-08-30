import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import * as React from 'react';
import ThemeSearch from '../../screens/ThemeSearch';
import UserSearch from '../../screens/UserSearch';
import { colors } from '../../styles';

const Tab = createMaterialTopTabNavigator();

function TopTabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.Purple,
        inactiveTintColor: '#D0BAE6',
        indicatorStyle: {
          backgroundColor: colors.Purple,
        },
      }}
    >
      <Tab.Screen
        name="UserSearch"
        component={UserSearch}
        options={{
          title: 'Usuários',
        }}
      />
      <Tab.Screen
        name="ThemeSearch"
        component={ThemeSearch}
        options={{
          title: 'Temas',
        }}
      />
    </Tab.Navigator>
  );
}

export default TopTabs;
