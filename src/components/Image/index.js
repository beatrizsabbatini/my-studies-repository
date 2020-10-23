import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { View ,Image, TouchableOpacity, Text} from'react-native';
import { AddThemeModalContext } from '../../contexts/AddThemeModalContext';
import { CurrentPictureContext } from '../../contexts/CurrentPictureContext';
import { colors } from '../../styles';
import styles from './styles';

export default function ImageViewer({ route }) {
  const { setModalOpen } = React.useContext(AddThemeModalContext);
  const { setCurrentPicture } = React.useContext(CurrentPictureContext);
  const { photo } = route.params;
  const navigation = useNavigation()
 
 return (
 <View style={styles.background}>
  <Image source={{ uri: photo.uri }} style={{width:380,height:550}}/>
  <View style={{flexDirection: 'row', alignItems: 'center'}}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Text style={styles.button}>Tirar outra</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => {
      navigation.navigate('MyLibrary');
      setCurrentPicture(photo.uri);
      setModalOpen(true);
    }}>
      <Text style={styles.button}>Usar essa</Text>
    </TouchableOpacity>
  </View>
  <TouchableOpacity onPress={() => {
      navigation.navigate('MyLibrary');
      setModalOpen(true);
    }}>
      <Text style={[styles.button, {color: colors.TextGrey}]}>Cancelar</Text>
    </TouchableOpacity>
</View>
 );
}