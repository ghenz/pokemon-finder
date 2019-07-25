import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './screens/Main';
import Home from './screens/Home';

const Routes = createAppContainer(
  createStackNavigator({
    Main: Main,
    Home: Home
  })
);

export default Routes;
