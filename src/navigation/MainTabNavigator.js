import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import MyProfileScreen from '../components/MyProfileScreen'
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProjectsScreen from '../components/ProjectsScreen';
import { COLOR } from '../utils/colors';
import LeaderBoardScreen from '../components/LeaderBoardScreen'
import UserProfileScreen from '../components/UserProfileScreen'


const config = Platform.select({
  web: { headerMode: 'screen' },
  default: {},
});

const HomeStack = createStackNavigator(
  {
    Home: MyProfileScreen,
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: 'My Profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

HomeStack.path = '';


const ProjectsStack=createStackNavigator({Projects:ProjectsScreen})


ProjectsStack.navigationOptions={
  tabBarLabel: 'My Projects',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

ProjectsStack.path = '';

const LeaderBoardStack = createStackNavigator(
  {
    LeaderBoard: LeaderBoardScreen,
    UserProfile:UserProfileScreen
  },
  config
);

LeaderBoardStack.navigationOptions = {
  tabBarLabel: 'Leader Board',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'} />
  ),
};

LeaderBoardStack.path = '';





const tabNavigator = createBottomTabNavigator({
  LeaderBoardStack,
  ProjectsStack,
  HomeStack,

 
},
 
{
  initialRouteName: 'LeaderBoardStack',
  tabBarOptions: {
    activeTintColor: '#e91e63',
    labelStyle: {
      fontSize: 14,
      fontWeight:'600'
    },
    style: {
      backgroundColor: COLOR.header,
    },
  }
},
);

tabNavigator.path = '';

export default tabNavigator;
