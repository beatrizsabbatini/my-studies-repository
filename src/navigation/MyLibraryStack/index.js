import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'; 
import { createStackNavigator } from '@react-navigation/stack';
import React, { useContext } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { AddThemeModalContext } from '../../contexts/AddThemeModalContext';
import { EditTopicModalContext } from '../../contexts/EditTopicModalContext';
import MyLibrary from '../../screens/MyLibrary';
import ThemeTopics from '../../screens/ThemeTopics';
import VisualizeTopic from '../../screens/VisualizeTopic';
import { colors, metrics } from '../../styles';
import styles from './styles';

const Stack = createStackNavigator();

const MyLibraryNavigator = ({ navigation }) => {
  const { setModalOpen, modalOpen } = useContext(AddThemeModalContext);
  const { editTopicModalOpen, setEditTopicModalOpen } = useContext(EditTopicModalContext);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyLibrary"
        component={MyLibrary}
        options={{
          headerTintColor: colors.TextGrey,
          headerTitle: 'Meus Temas',
          headerTitleAlign: 'center',
          headerRight: () => (
            <TouchableOpacity onPress={() => setModalOpen(!modalOpen)}>
              <MaterialIcons
                name="add-to-photos"
                size={28}
                color={colors.Purple}
                style={{ paddingRight: metrics.doubleBaseMargin }}
              />
            </TouchableOpacity>
          ),
          headerLeft: (props) => (
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
        name="ThemeTopics"
        component={ThemeTopics}
        options={({ route, navigation }) => ({
          headerTitle: `${route.params.item.title}`,
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
       <Stack.Screen
        name="VisualizeTopic"
        component={VisualizeTopic}
        options={({ route, navigation }) => ({
          headerTitle: `${route.params.item.title}`,
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
            <TouchableOpacity onPress={() => setEditTopicModalOpen(true)}>
              <Feather 
                name="edit" 
                size={24} 
                color={colors.Purple} 
                style={{ paddingRight: metrics.doubleBaseMargin }} />
            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
};

export default MyLibraryNavigator;
