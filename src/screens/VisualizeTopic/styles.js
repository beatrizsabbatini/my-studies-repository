import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({
  background: {
    marginHorizontal: metrics.doubleBaseMargin,
    flex: 1,
  },
  title:{
    fontSize: fonts.input,
    color: colors.TextGrey,
    textDecorationLine: "underline",
    marginBottom: metrics.doubleBaseMargin,
    marginLeft: 5
  },
  referenceContainer: {
    marginVertical: metrics.smallMargin,
    marginHorizontal: 5,
    backgroundColor: colors.White,
    borderRadius: metrics.smallRadius,
    padding: metrics.doubleBaseMargin,
    shadowColor: "#000",
    shadowOffset: {
    width: 0,
    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,  
  },
  link:{
    color: colors.White,
    textTransform: "uppercase",
    fontWeight: 'bold',
    textAlign: 'center',
  },
  accessButton:{
    backgroundColor: colors.Purple,
    padding: metrics.smallMargin,
    marginVertical: metrics.baseMargin,
    borderRadius: metrics.smallRadius,
    paddingHorizontal: metrics.doubleBaseMargin,
    marginBottom: 15
  },
  itemTitle:{
    color: colors.TextGrey,
    fontWeight: 'bold',
    marginHorizontal: metrics.doubleBaseMargin,
  },
  addButton:{
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: metrics.doubleBaseMargin
  },
  accessAndEditRow:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: metrics.doubleBaseMargin,
    width: '100%',
    
  },
  editButton:{
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: metrics.smallRadius,
    flexDirection: 'row'
  },
  editButtonText:{
    color: colors.Purple,
    textDecorationLine: 'underline',
    marginLeft: metrics.smallMargin
  },
  bottomContainer:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  removeButton:{
    color: colors.Red,
    textDecorationLine: 'underline',
    marginLeft: metrics.smallMargin
  }
});

export default styles;
