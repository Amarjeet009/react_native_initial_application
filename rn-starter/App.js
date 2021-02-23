import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import BoxScreen from './src/screens/BoxScreen';
import ColorScreen from './src/screens/ColorScreens';
import ComponentsScreen from './src/screens/ComponentsScreen';
import CounterScreen from './src/screens/CounterScreen';
import HomeScreen from './src/screens/HomeScreen';
import ImageScreen from './src/screens/ImageScreen';
import ListScreen from './src/screens/ListScreen';
import SquareScreen from './src/screens/SquareScreen';
import SquareScreenReducer from './src/screens/SquareScreenReducer';
import SquareScreenReuseableCode from './src/screens/SquareScreenReuseableCode';
import TextScreen from './src/screens/TextScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    ImageList: ImageScreen,
    CountView: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    SquareNew: SquareScreenReuseableCode,
    SquareReducer: SquareScreenReducer,
    TextS: TextScreen,
    Box: BoxScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'App',
    },
  }
);

export default createAppContainer(navigator);