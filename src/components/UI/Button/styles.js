import { StyleSheet } from 'react-native';
import { metrics } from '../../../styles';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: metrics.smallMargin,
    width: '49%',
    borderRadius: metrics.smallMargin,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
});

export default styles;
