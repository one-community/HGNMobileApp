import jwtDecode from 'jwt-decode';
import httpService from '../services/httpService';
import {tokenKey} from '../../config';
import { ENDPOINTS } from '../utils/URL';
import { GET_ERRORS } from '../constants/errors';
import { SET_CURRENT_USER } from '../constants/auth';
import { AsyncStorage } from 'react-native';



export const loginUser = credentials => async dispatch => {
  console.log(credentials, ENDPOINTS.LOGIN);

  try {
    const result = await httpService.post(ENDPOINTS.LOGIN, credentials);
    if (result.data.new) {
      dispatch(setCurrentUser({ new: true, userId: res.data.userId }));
    } else {
      AsyncStorage.setItem(tokenKey, result.data.token).then(value => console.log(value));
      httpService.setjwt(result.data.token);
      // const decoded = jwtDecode(result.data.token);
      // console.log('userid',decoded.userid)
      // const userProfileURL = ENDPOINTS.USER_PROFILE(decoded.userid)
      // console.log('url',userProfileURL)
      // let currentUserProfile=await httpService.get(userProfileURL)
      // currentUserProfile={...currentUserProfile.data,...decoded}
      // console.log('currentUserProfile', currentUserProfile);
      // dispatch(setCurrentUser(currentUserProfile));
    }
  } catch (err) {
    console.log('Error', err);
    if (err.response && err.response.status === 403) {
      const errors = { email: err.response.data.message };
      // dispatch({
      //   type: GET_ERRORS,
      //   payload: errors
      // })
    }
  }
};

export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded
});

export const logoutUser = () => dispatch => {
  localStorage.removeItem(tokenKey);
  httpService.setjwt(false);
  dispatch(setCurrentUser(null));
};
