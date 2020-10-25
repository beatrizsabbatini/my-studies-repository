import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';
import { colors } from '../../styles';
import MyLibraryStack from '../MyLibraryStack';
import SearchStack from '../SearchStack';

const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        inactiveBackgroundColor: colors.InactiveBackgroundPurple,
        activeBackgroundColor: colors.Purple,
        style: {
          height: 50,
        },
      }}
    >
      {/* <Tab.Screen
        name="Search"
        component={SearchStack}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <AntDesign
              name="search1"
              size={24}
              color={focused ? colors.White : colors.InactiveIcon}
              style={{ textAlignVertical: 'center', height: '100%' }}
            />
          ),
        }}
      /> */}
      <Tab.Screen
        name="MyLibrary"
        component={MyLibraryStack}
        options={{
          tabBarLabel: ({ color, focused }) => (
            <MaterialIcons
              name="collections-bookmark"
              size={26}
              style={{ textAlignVertical: 'center', height: '100%' }}
              color={focused ? colors.White : colors.InactiveIcon}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabs;
