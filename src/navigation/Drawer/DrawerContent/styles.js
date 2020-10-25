import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../../styles';

const styles = StyleSheet.create({
  drawerBackground: {
    flex: 1,
    padding: metrics.baseMargin,
  },
  userInfo: {
    width: '100%',
    alignItems: 'center',
  },
  userName: {
    fontWeight: 'bold',
    fontSize: fonts.input,
    color: colors.Purple,
    marginVertical: metrics.doubleBaseMargin,
  },
  nameTitle:{
    color: colors.Purple,
    fontWeight: 'bold',
    fontSize: fonts.big,
    marginBottom: metrics.bigMargin
  }
});

export default styles;
