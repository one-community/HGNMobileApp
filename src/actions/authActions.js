import jwtDecode from 'jwt-decode';
import httpService from '../services/httpService';
import { tokenKey } from '../../config';
import { ENDPOINTS } from '../utils/URL';

import { SET_CURRENT_USER } from '../constants/auth';
import { AsyncStorage } from 'react-native';

export const loginUser = (credentials, navigation) => async dispatch => {
  try {
    const result = await httpService.post(ENDPOINTS.LOGIN, credentials);
    if (result.data.new) {
      dispatch(setCurrentUser({ new: true, userId: res.data.userId }));
    } else {
      await AsyncStorage.setItem(tokenKey, result.data.token);

      httpService.setjwt(result.data.token);
      const decoded = jwtDecode(result.data.token);

      const userProfileURL = ENDPOINTS.USER_PROFILE(decoded.userid);

      dispatch(setCurrentUser(decoded));
    }
  } catch (err) {
    console.log('Error', err);
    if (err.response && err.response.status === 403) {
      const errors = { email: err.response.data.message };
    }
  }
};

export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded
});

export const logoutUser = () => async dispatch => {
  console.log('Error');
  await AsyncStorage.removeItem(tokenKey);
  httpService.setjwt(false);
  dispatch(setCurrentUser(null));
};
