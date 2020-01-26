import * as React from 'react';
import { ActivityIndicator, Button, StatusBar, StyleSheet, View, AsyncStorage } from 'react-native';
import { tokenKey } from '../../config';
import httpService from '../services/httpService';
import jwtDecode from 'jwt-decode';
import { ENDPOINTS } from '../utils/URL';
import { setCurrentUser, logoutUser } from "../actions/authActions"

import { store } from '../store';

//const { store } = configureStore();

export default class AuthLoadingScreen extends React.Component {
  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem(tokenKey);
    //console.log('userToken', userToken);
    if (userToken) {
      httpService.setjwt(userToken);
      const decoded = jwtDecode(userToken);
      //console.log('decoded', decoded);

      // Check for expired token
      const currentTime = Date.now() / 1000;
      if (decoded.expiryTimestamp < currentTime) {
        // Logout user
        return this.props.navigation.navigate('Auth');
      }

      const userProfileURL = ENDPOINTS.USER_PROFILE(decoded.userid);
      //console.log('url', userProfileURL);
      let currentUserProfile = await httpService.get(userProfileURL);
      currentUserProfile = { ...currentUserProfile.data, ...decoded };
      //console.log('currentUserProfile', currentUserProfile);
      store.dispatch(setCurrentUser(currentUserProfile));
    }

    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? 'Main' : 'Auth');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="red" size="large" />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
