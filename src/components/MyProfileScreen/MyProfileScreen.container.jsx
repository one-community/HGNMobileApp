import { connect } from 'react-redux';
import _ from 'lodash';

import { loginUser,logoutUser } from '../../actions/authActions';

import MyProfileScreen from './MyProfileScreen';

const mapStateToProps = state => {
  //console.log('state is ',state)
  return {
    // auth: state.auth,
    // userProfile: _.get(state, 'userProfile'),
    // user: _.get(state, 'user', {}),
    currentUserProfile: _.get(state,'auth.user',{} )
  }
};

export default connect(mapStateToProps,{logoutUser})(MyProfileScreen);
