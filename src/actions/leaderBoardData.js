import httpService from '../services/httpService'
import { ENDPOINTS } from '../utils/URL';
import {getLeaderBoardData as getLeaderBoardDataActionCreator} from '../constants/leaderBoardData'
export const getLeaderboardData = (userId) => {
  console.log('getLeaderboardData function')




	return async (dispatch) => {

  
    console.log('User is ---------------',userId)

    const url = ENDPOINTS.LEADER_BOARD(userId)
    console.log(url)
    const res = await httpService.get(url)
  
		console.log('LeaderBoardData is ' , res.data)

		await dispatch(getLeaderBoardDataActionCreator(res.data))
  }
  


};
