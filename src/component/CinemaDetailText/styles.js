import { StyleSheet, StatusBar, Dimensions } from 'react-native';
import { searchBlue, interactiveBlue, darkBlueShade, lightyBlue  } from '../../styles/color';

const { width: winWidth } = Dimensions.get('window');
export default StyleSheet.create({
  cinemaContainer: {
    backgroundColor: darkBlueShade,
    borderWidth: 1,
    marginRight: 2,
    marginLeft: 2,
    borderColor: 'white'
  },
  text: {
    margin: 3,
    color: 'white'
  },
  websiteLink:{
    margin: 3
  },
  name: {
    marginTop: 2,
    textAlign: 'center',
    fontSize: 30,
    color: 'white'
  }
});
