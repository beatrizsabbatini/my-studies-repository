import React, { useRef, useState } from 'react';

import { Text, View, TouchableOpacity } from 'react-native';
import { Camera } from 'expo-camera';
import styles from './styles';

export default function CameraComponent({navigation}) {
  const [type, setType] = useState(Camera.Constants.Type.back);

  const ref = useRef()

  return (
    <View style={{ flex: 1 }}>
      <Camera style={{ flex: 1 }} type={type} ref={ref}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              flex: 0.1,
              alignSelf: 'flex-end',
              alignItems: 'center',
            }}
            onPress={() => {
              setType(
                type === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}>
            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}> Flip </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{alignSelf: 'center'}} onPress={async() => {
            if(ref){
            let photo = await ref.current.takePictureAsync('photo');
            console.log('photo', photo);
            navigation.navigate('ImageViewer',{'photo':photo});
            }
            }}>
            <View style={styles.button}>
              <View style={styles.buttonContent} />
            </View>
        </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}