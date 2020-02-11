import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainTabNavigator from './MainTabNavigator';
import LoginScreen from '../components/LoginScreen';
import AuthLoadingScreen from './AuthLoadingScreen';
import { ActivityIndicator, Button, StatusBar, StyleSheet, View, AsyncStorage } from 'react-native';
import { tokenKey } from '../../config';
import httpService from '../services/httpService';
import jwtDecode from 'jwt-decode';
import { ENDPOINTS } from '../utils/URL';
import { store } from '../store';
import { setCurrentUser, logoutUser } from '../actions/authActions';

const AuthStack = createStackNavigator();

const SwitchStack = createStackNavigator();

const Auth = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen name="Login" component={LoginScreen} />
  </AuthStack.Navigator>
);

const AppNavigator = ({auth}) => {
  const [isLoading, setIsLoading] = useState(true);
  //const [loggedIn, setLoggedIn] = useState(false);

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place

    console.log('Inside',auth.isAuthenticated);
    const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem(tokenKey);
        console.log('userToken', userToken);

        if (userToken) {
          httpService.setjwt(userToken);
          const decoded = jwtDecode(userToken);
          console.log('decoded', decoded);

          // Check for expired token
          const currentTime = Date.now() / 1000;
          if (decoded.expiryTimestamp < currentTime) {
            // Logout user
            // return this.props.navigation.navigate('Auth');
            //setLoggedIn(false);
            setIsLoading(false);
            return;
          }

          const userProfileURL = ENDPOINTS.USER_PROFILE(decoded.userid);
           console.log('url', userProfileURL);
          let currentUserProfile = await httpService.get(userProfileURL);
          currentUserProfile = { ...currentUserProfile.data, ...decoded };
          // console.log('currentUserProfile', currentUserProfile);
          store.dispatch(setCurrentUser(currentUserProfile));
          setIsLoading(false);
         // setLoggedIn(true);
        }
        setIsLoading(false);
      } catch (e) {
        // Restoring token failed
        console.log('error is', e);
        setIsLoading(false);
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      // dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };

    bootstrapAsync();
  }, [auth.isAuthenticated]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator color="red" size="large" />
        <StatusBar barStyle="default" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {auth.isAuthenticated ? (
        <SwitchStack.Navigator headerMode="none">
          <SwitchStack.Screen name="Main" component={MainTabNavigator} />
        </SwitchStack.Navigator>
      ) : (
        <SwitchStack.Navigator headerMode="none">
          <SwitchStack.Screen name="Auth" component={Auth} />
        </SwitchStack.Navigator>
      )}
    </NavigationContainer>
  );
};


import { connect } from 'react-redux';
import _ from 'lodash';




const mapStateToProps = state => {
  //console.log('state is ',state)
  return {
     auth: state.auth,
    // userProfile: _.get(state, 'userProfile'),
    // user: _.get(state, 'user', {}),
    currentUserProfile: _.get(state,'auth.user',{} )
  }
};

export default connect(mapStateToProps)(AppNavigator);








// export default AppNavigator;
