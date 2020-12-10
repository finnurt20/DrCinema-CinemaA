import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { lightYellow, sweetPink, darkBlueShade } from '../../styles/color';

const { width: winWidth } = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: 10,
  },
  item: {
    padding: 10,
    margin: 1,
    //marginVertical: 8,
    //marginHorizontal: 20,
    borderWidth: 3,
    backgroundColor: darkBlueShade,
    //borderRadius: 50,
  },
  nameText: {
    color: 'white',
    paddingTop: 18,
    textAlign: 'center',
    fontSize: 20
  },
  websiteText: {
    color: 'white',
    paddingTop: 18,
    textAlign: 'center',
    fontSize: 16
  },
  itemView: {
    flex: 1,
    //flexDirection: 'row',
    //justifyContent: 'space-between'
  },
  listEmpty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
