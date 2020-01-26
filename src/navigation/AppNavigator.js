import React from 'react';
import { createAppContainer, createSwitchNavigator, } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../components/LoginScreen'
import AuthLoadingScreen from './AuthLoadingScreen'


const AuthStack = createStackNavigator({ Login: LoginScreen });
export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    AuthLoading: AuthLoadingScreen,
    Main: MainTabNavigator,
    Auth:AuthStack
  },
  {
    initialRouteName: 'AuthLoading',
  })
);
