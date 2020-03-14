import httpService from '../services/httpService';
import * as types from './../constants/projectMembership';
import { ENDPOINTS } from '../utils/URL';

export const fetchAllMembers = projectId => {
  const request = httpService.get(ENDPOINTS.PROJECT_MEMBERS(projectId));

  return async dispatch => {
    await dispatch(setMemberStart());
    request
      .then(res => {
        dispatch(setMembers(res.data));
      })
      .catch(err => {
        console.log('Error', err);
        dispatch(setMembersError(err));
      });
  };
};

export const setMemberStart = () => {
  return {
    type: types.FETCH_MEMBERS_START
  };
};

/**
 * set Members in store
 * @param payload : Members []
 */
export const setMembers = members => {
  return {
    type: types.RECEIVE_MEMBERS,
    members
  };
};

/**
 * Error when setting project
 * @param payload : error status code
 */
export const setMembersError = err => {
  return {
    type: types.FETCH_MEMBERS_ERROR,
    err
  };
};
