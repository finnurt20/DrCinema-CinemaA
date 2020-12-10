import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { lightYellow, sweetPink, greyBlue, darkBlueShade,interactiveBlue } from '../../styles/color';

const { width: winWidth } = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    padding: 10,
    backgroundColor: 'black'
  },
  item: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: darkBlueShade,
    padding: 8
  },
  timeText: {
    //textAlign: 'center',
    fontSize: 20,
    color: 'white'
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
  },
  buytext: {
    color: interactiveBlue
  }
});
