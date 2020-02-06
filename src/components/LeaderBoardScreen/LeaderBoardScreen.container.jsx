import { connect } from 'react-redux'
import _ from 'lodash'

import { getLeaderboardData } from "../../actions/leaderBoardData"


import LeaderBoardScreen from './LeaderBoardScreen'

const mapStateToProps = state => {

  console.log('State=Leaderboard container',state)


  return {

    isAuthenticated: _.get(state, 'auth.isAuthenticated',false),
    leaderBoardData: _.get(state, 'leaderBoardData',[]),
  
  }
}

export default connect(mapStateToProps, {
  getLeaderboardData
})(LeaderBoardScreen)
