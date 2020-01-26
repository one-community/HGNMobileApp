
import {REACT_APP_APIENDPOINT} from '../../environment'
const APIEndpoint = REACT_APP_APIENDPOINT

console.log('apiendpoint',APIEndpoint)

export const ENDPOINTS = {
  USER_PROFILE: userId => `${APIEndpoint}/userprofile/${userId}`,
  USER_TEAM: userId => `${APIEndpoint}/userprofile/teammembers/${userId}`,
  LOGIN: `${APIEndpoint}/login`,
  PROJECTS: () => `${APIEndpoint}/projects/`,
  UPDATE_PASSWORD: userId => `${APIEndpoint}/userprofile/${userId}/updatePassword`,
  FORCE_PASSWORD: `${APIEndpoint}/forcepassword`
};