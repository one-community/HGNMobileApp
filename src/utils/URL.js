
import {REACT_APP_APIENDPOINT} from '../../environment'
const APIEndpoint = REACT_APP_APIENDPOINT

console.log('apiendpoint',APIEndpoint)

export const ENDPOINTS = {
  USER_PROFILE: userId => `${APIEndpoint}/userprofile/${userId}`,
  USER_TEAM: userId => `${APIEndpoint}/userprofile/teammembers/${userId}`,
  LOGIN: `${APIEndpoint}/login`,
  PROJECTS: `${APIEndpoint}/projects/`,
  PROJECT: `${APIEndpoint}/project/`,
	PROJECT_MEMBERS: projectId => `${APIEndpoint}/project/${projectId}/users`,
  UPDATE_PASSWORD: userId => `${APIEndpoint}/userprofile/${userId}/updatePassword`,
  FORCE_PASSWORD: `${APIEndpoint}/forcepassword`,
  LEADER_BOARD: userId => `${APIEndpoint}/dashboard/leaderboard/${userId}`,
};