import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import TabBarIcon from '../../components/TabBarIcon';
import MyProfileScreen from '../components/MyProfileScreen';
import ProjectsScreen from '../components/ProjectsScreen';
import { COLOR } from '../utils/colors';
import LeaderBoardScreen from '../components/LeaderBoardScreen';
import UserProfileScreen from '../components/UserProfileScreen';

const MyProfileStack = createStackNavigator({ MyProfile: MyProfileScreen });

const ProjectsStack = createStackNavigator({ Projects: ProjectsScreen });

const LeaderBoardStack = createStackNavigator({
  LeaderBoard: LeaderBoardScreen,
  UserProfile: UserProfileScreen
});

const tabNavigator = createBottomTabNavigator(
  {
    LeaderBoard: LeaderBoardStack,
    Projects: ProjectsStack,
    MyProfile: MyProfileStack
  },

  {
    initialRouteName: 'LeaderBoard',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;

        let iconName;
        if (routeName === 'Projects') {
          iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
        } else if (routeName === 'LeaderBoard') {
          iconName = focused ? 'ios-list-box' : 'ios-list';
        } else if (routeName === 'MyProfile') {
          iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
        }

        return <TabBarIcon name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 14,
        fontWeight: '600'
      },
      style: {
        backgroundColor: COLOR.header
      }
    }
  }
);

export default tabNavigator;
