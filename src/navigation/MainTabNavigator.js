import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, Button, Image, AsyncStorage } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TabBarIcon from '../../components/TabBarIcon';
import MyProfileScreen from '../components/MyProfileScreen';
import ProjectsScreen from '../components/ProjectsScreen';
import { COLOR } from '../utils/colors';
import LeaderBoardScreen from '../components/LeaderBoardScreen';
import UserProfileScreen from '../components/UserProfileScreen';
import TimerScreen from '../components/TimerScreen';
import Project from '../components/Project';
import UsersList from '../components/UsersList'

import { tokenKey } from '../../config';
import { setCurrentUser, logoutUser } from '../actions/authActions';

const MyProfileStack = createStackNavigator();
const ProjectsStack = createStackNavigator();
const LeaderBoardStack = createStackNavigator();
const TimeEntryStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const TimeEntry = () => (
  <TimeEntryStack.Navigator
    screenOptions={({ navigation, route }) => ({
      headerStyle: {
        backgroundColor: COLOR.HGN_DARK_BLUE
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    })}
  >
    <TimeEntryStack.Screen
      name="TimeEntry"
      component={TimerScreen}
      options={{ title: 'Add Time' }}
    />
  </TimeEntryStack.Navigator>
);

const MyProfile = () => {
  return (
    <MyProfileStack.Navigator
      screenOptions={({ navigation, route }) => ({
        headerStyle: {
          backgroundColor: COLOR.HGN_DARK_BLUE
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      })}
    >
      <MyProfileStack.Screen
        name="MyProfile"
        component={MyProfileScreen}
        options={{ title: 'My Profile' }}
      />
    </MyProfileStack.Navigator>
  );
};

const Projects = () => {
  return (
    <ProjectsStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLOR.HGN_SILVER
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}
    >
      <ProjectsStack.Screen name="Projects" component={ProjectsScreen} />
      <ProjectsStack.Screen name="Project" component={Project} />
      <ProjectsStack.Screen name="UserProfile" component={UserProfileScreen} />
      <ProjectsStack.Screen name="UsersList" component={UsersList} />
    </ProjectsStack.Navigator>
  );
};

const LeaderBoard = () => {
  return (
    <LeaderBoardStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: COLOR.HGN_DARK_BLUE
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
      }}
    >
      <LeaderBoardStack.Screen name="LeaderBoard" component={LeaderBoardScreen} />
      <LeaderBoardStack.Screen name="UserProfile" component={UserProfileScreen} />
    </LeaderBoardStack.Navigator>
  );
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'LeaderBoard') {
            iconName = focused ? 'ios-list-box' : 'ios-list';
          } else if (route.name === 'Projects') {
            iconName = focused ? 'ios-document' : 'ios-document';
          } else if (route.name === 'TimeEntry') {
            iconName = focused ? 'ios-time' : 'ios-time';
          } else {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          }

          return <TabBarIcon name={iconName} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
        style: {
          backgroundColor: COLOR.HGN_DARK_BLUE
        }
      }}
    >
      <Tab.Screen name="LeaderBoard" component={LeaderBoard} />
      <Tab.Screen name="Projects" component={Projects} />
      <Tab.Screen name="MyProfile" component={MyProfile} />
      <Tab.Screen name="TimeEntry" component={TimeEntry} />
    </Tab.Navigator>
  );
};
export default MainTabNavigator;
//const MyProfileStack = createStackNavigator({ MyProfile: MyProfileScreen });

//const ProjectsStack = createStackNavigator({ Projects: ProjectsScreen });

// const LeaderBoardStack = createStackNavigator({
//   LeaderBoard: LeaderBoardScreen,
//   UserProfile: UserProfileScreen
// });

// const tabNavigator = createBottomTabNavigator(
//   {
//     LeaderBoard: LeaderBoardStack,
//     Projects: ProjectsStack,
//     MyProfile: MyProfileStack
//   },

//   {
//     initialRouteName: 'LeaderBoard',
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, horizontal, tintColor }) => {
//         const { routeName } = navigation.state;

//         let iconName;
//         if (routeName === 'Projects') {
//           iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
//         } else if (routeName === 'LeaderBoard') {
//           iconName = focused ? 'ios-list-box' : 'ios-list';
//         } else if (routeName === 'MyProfile') {
//           iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
//         }

//         return <TabBarIcon name={iconName} size={25} color={tintColor} />;
//       }
//     }),
//     tabBarOptions: {
//       activeTintColor: '#e91e63',
//       labelStyle: {
//         fontSize: 14,
//         fontWeight: '600'
//       },
//       style: {
//         backgroundColor: COLOR.header
//       }
//     }
//   }
// );

// export default tabNavigator;
