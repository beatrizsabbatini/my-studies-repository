import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import Logo from '../../../assets/logo.png';
import ThemeTopics from '../../screens/ThemeTopics';
import UserProfile from '../../screens/UserProfile';
import { colors, metrics } from '../../styles';
import TopTabs from '../TopTabs';
import styles from './styles';

const Stack = createStackNavigator();

const SearchNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="TopTabs"
        component={TopTabs}
        options={{
          headerStyle: {
            elevation: 0, // remove shadow on Android
            shadowOpacity: 0, // remove shadow on iOS
          },
          headerTitle: () => (
            <Image
              source={Logo}
              style={{ resizeMode: 'contain', width: 150 }}
            />
          ),
          headerTitleAlign: 'center',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <MaterialIcons
                name="menu"
                size={30}
                color={colors.Purple}
                style={{ paddingLeft: metrics.doubleBaseMargin }}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="UserProfile"
        component={UserProfile}
        options={({ route, navigation }) => ({
          headerTitle: `${route.params.userName}`,
          headerLeft: () => (
            <Ionicons
              name="ios-arrow-back"
              size={30}
              color={colors.Purple}
              onPress={() => navigation.pop()}
              style={styles.backIcon}
            />
          ),
          headerRight: () => (
            <Image
              source={{ uri: route.params.userPhoto }}
              style={styles.picture}
            />
          ),
        })}
      />
      <Stack.Screen
        name="ThemeTopics"
        component={ThemeTopics}
        options={({ route, navigation }) => ({
          headerTitle: `${route.params.name}`,
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Ionicons
              name="ios-arrow-back"
              size={30}
              color={colors.Purple}
              onPress={() => navigation.pop()}
              style={styles.backIcon}
            />
          ),
          headerRight: () => (
            <Image
              source={{ uri: route.params.picture }}
              style={styles.picture}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default SearchNavigator;
