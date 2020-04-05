import httpService from '../services/httpService';
import { ENDPOINTS } from '../utils/URL';
import { getAllUserProfiles as getAllUserProfilesActionCreator } from '../constants/allUserProfiles';
export const getAllUserProfiles = () => {
  return async dispatch => {
    const url = ENDPOINTS.ALL_USER_PROFILES;

    const res = await httpService.get(url);

    await dispatch(getAllUserProfilesActionCreator(res.data));
  };
};
