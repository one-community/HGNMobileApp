export const allUserProfilesReducer = (allUserProfiles = [], action) => {
  if (action.type === 'GET_ALL_USER_PROFILES') {
    return action.payload;
  }

  return allUserProfiles;
};
