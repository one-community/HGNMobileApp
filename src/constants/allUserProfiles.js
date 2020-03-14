export const GET_ALL_USER_PROFILES = 'GET_ALL_USER_PROFILES';

export const getAllUserProfiles = data => ({
  type: GET_ALL_USER_PROFILES,
  payload: data
});
