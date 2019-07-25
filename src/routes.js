import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './screens/Main';
import Home from './screens/Home';

const Routes = createAppContainer(
  createStackNavigator({
    Home: Home,
    Main: Main
  })
);

export default Routes;
