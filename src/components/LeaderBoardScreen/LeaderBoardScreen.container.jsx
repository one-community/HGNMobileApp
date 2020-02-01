import { connect } from 'react-redux'
import _ from 'lodash'

import { getLeaderboardData } from "../../actions/leaderBoardData"


import LeaderBoardScreen from './LeaderBoardScreen'

const mapStateToProps = state => {


  return {

    isAuthenticated: _.get(state, 'auth.isAuthenticated',false),
    leaderboardData: _.get(state, 'leaderboardData',[]),
  
  }
}

export default connect(mapStateToProps, {
  getLeaderboardData
})(LeaderBoardScreen)
