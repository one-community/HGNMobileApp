import {GET_LEADERBOARD_DATA} from '../constants/leaderBoardData'
export const leaderboardDataReducer = (leaderBoardData = [1,2,3], action) => {
  if (action.type === GET_LEADERBOARD_DATA) {
    return action.payload;
  }

  return leaderBoardData;
};
