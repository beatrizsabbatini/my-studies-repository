import { StyleSheet } from 'react-native';
import { fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  searchBar: {
    borderRadius: 25,
    height: 40,
  },
  input: {
    fontSize: fonts.input,
  },
  list: {
    paddingVertical: metrics.doubleBaseMargin,
  },
  background: {
    padding: metrics.bigMargin,
  },
});

export default styles;
