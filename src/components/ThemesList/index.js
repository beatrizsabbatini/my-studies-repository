import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import { ActivityIndicator, FlatList } from 'react-native';
import ThemeItem from '../ThemeItem';
import styles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { getThemesRequest, getThemesSuccess} from '../../store/ducks/myThemes';
import { colors } from '../../styles';

const ThemesList = ({ userId, userName, navigation, isMyProfile }) => {
  const dispatch = useDispatch()
  const themes = useSelector(state => state.myThemes.themes)
  const loading = useSelector(state => state.myThemes.loading)
  const [keys, setKeys] = useState();
  const [themesWithId, setThemesWithId] = useState();

  const numberOfColumns = 3;

  useEffect(() => {
    getThemesService()
  }, [])

  useEffect(() => {
    if (themes){
      setKeys(Object.keys(themes));
    }
  }, [themes])

  useEffect(() => {
    if (keys && themes){
      const themesWithId = keys.map(key => {
        return {...themes[key], id: key}
      })
      setThemesWithId(themesWithId)
    }
  }, [keys])

  const getThemesService = async () => {
    const { currentUser } = firebase.auth();
    dispatch(getThemesRequest()); 

    return await firebase
      .database()
      .ref(`users/${currentUser.uid}/themes`)
      .on('value', snapshot => {
         const themes = snapshot.val();
         dispatch(getThemesSuccess(themes)); 
      })
  }

  return (
    <>
    {loading ? (
      <ActivityIndicator size="large" style={{flex: 1, alignSelf: 'center'}} color={colors.Purple} />
    ) : (
        <FlatList
        style={styles.list}
        data={themesWithId}
        numColumns={numberOfColumns}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ThemeItem
            item={item}
            navigation={navigation}
            isMyProfile={isMyProfile}
          />
        )}
      />
    )}
    </>
  );
};

export default ThemesList;
