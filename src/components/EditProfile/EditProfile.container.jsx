import { connect } from 'react-redux';
import _ from 'lodash';

import { getLeaderboardData } from '../../actions/leaderBoardData';
import { setCurrentUser, logoutUser } from '../../actions/authActions';

import EditProfile from './EditProfile';

const mapStateToProps = state => {

  return {
    user: _.get(state, 'auth.user', {}),
  
  };
};

export default connect(mapStateToProps, {
  getLeaderboardData,
  logoutUser
})(EditProfile);
