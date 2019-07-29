import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './screens/Main';
import Step1 from './screens/SignUp/Step1';
import Step2 from './screens/SignUp/Step2';
import Home from './screens/Home';

const Routes = createAppContainer(
  createStackNavigator({
    Main: Main,
    Step1: Step1,
    Step2: Step2,
    Home: Home
  })
);

export default Routes;
