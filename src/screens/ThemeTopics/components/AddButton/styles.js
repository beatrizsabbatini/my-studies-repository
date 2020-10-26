import { StyleSheet } from 'react-native';

import { colors, fonts, metrics } from '../../../../styles';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    backgroundColor: colors.Purple,
    padding: metrics.baseMargin,
    borderRadius: metrics.smallMargin,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  buttonText: {
    fontSize: fonts.medium,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.White,
    marginLeft: metrics.baseMargin,
  }
});

export default styles;
