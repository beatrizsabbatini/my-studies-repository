import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  list: {
    marginTop: metrics.doubleBaseMargin,
  },
  background: {
    padding: metrics.doubleBaseMargin,
  },
  circleAndTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItem: {
    backgroundColor: colors.White,
    padding: metrics.baseMargin,
    marginVertical: metrics.smallMargin,
    borderRadius: metrics.smallMargin,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 2,
  },
  circle: {
    borderRadius: metrics.doubleBaseMargin,
    width: 10,
    height: 10,
    marginLeft: metrics.baseMargin,
  },
  topicName: {
    fontWeight: 'bold',
    marginLeft: metrics.doubleBaseMargin,
    color: colors.TextGrey,
  },
  button: {
    padding: metrics.baseMargin,
    width: '49%',
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
    fontSize: fonts.small,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: metrics.baseMargin,
  },
});

export default styles;
