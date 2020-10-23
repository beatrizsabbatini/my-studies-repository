import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  list: {
    margin: metrics.doubleBaseMargin,
  },
  noThemesContainer:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noThemesMessage:{
    fontWeight: 'bold',
    fontSize: fonts.big,
    color: colors.LightGrey,
    marginTop: 20
  }
});

export default styles;
