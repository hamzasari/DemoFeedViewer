import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../components/pages/Home';
import FeedDetail from '../components/pages/FeedDetail';
import Profile from '../components/pages/Profile';

import NavigationRoutes from './NavigationRoutes';

const Stack = createNativeStackNavigator();

const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};

const navigationOptions = {
  cardStyle: {background: 'black'},
  headerShown: false,
  transitionSpec: {
    open: config,
    close: config,
  },
};

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={NavigationRoutes.home}
          component={Home}
          options={navigationOptions}
        />
        <Stack.Screen
          name={NavigationRoutes.feedDetail}
          component={FeedDetail}
          options={navigationOptions}
        />
        <Stack.Screen
          name={NavigationRoutes.profile}
          component={Profile}
          options={navigationOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
