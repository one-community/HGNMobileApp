import httpService from '../services/httpService';
import { ENDPOINTS } from '../utils/URL';
import { getAllUserProfiles as getAllUserProfilesActionCreator } from '../constants/allUserProfiles';
export const getAllUserProfiles = () => {
  console.log('getAllUserProfiles function');

  return async dispatch => {
    const url = ENDPOINTS.ALL_USER_PROFILES;
    console.log(url);
    const res = await httpService.get(url);

    console.log('User Profiles is ', res.data);

    await dispatch(getAllUserProfilesActionCreator(res.data));
  };
};
