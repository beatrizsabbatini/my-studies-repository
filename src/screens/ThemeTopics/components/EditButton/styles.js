import { StyleSheet } from 'react-native';

import { colors, fonts, metrics } from '../../../../styles';

const styles = StyleSheet.create({

  editButton:{
    marginBottom: 15,
    flexDirection: 'row',
    backgroundColor: colors.White,
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
  buttonEditText:{
    fontSize: fonts.medium,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.Purple,
    marginLeft: metrics.baseMargin,
  },

});

export default styles;
