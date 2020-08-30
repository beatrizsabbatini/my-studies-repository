import { StyleSheet } from 'react-native';
import { metrics } from '../../styles';

const styles = StyleSheet.create({
  backIcon: {
    padding: metrics.baseMargin,
    marginLeft: metrics.baseMargin,
  },
  picture: {
    borderRadius: metrics.doubleBaseMargin,
    width: 35,
    height: 35,
    marginRight: metrics.bigMargin,
  },
});

export default styles;
