import { connect } from 'react-redux'
import _ from 'lodash'

import { getLeaderboardData } from "../../actions/leaderBoardData"
import { setCurrentUser, logoutUser } from '../../actions/authActions';


import LeaderBoardScreen from './LeaderBoardScreen'

const mapStateToProps = state => {

 // console.log('State=Leaderboard container',state)


  return {

    auth: _.get(state, 'auth',false),
    leaderBoardData: _.get(state, 'leaderBoardData',[]),
  
  }
}

export default connect(mapStateToProps, {
  getLeaderboardData,logoutUser
})(LeaderBoardScreen)
