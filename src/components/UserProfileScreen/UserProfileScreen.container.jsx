import { connect } from 'react-redux';
import _ from 'lodash';

import { getUserProfile } from '../../actions/userProfile';

import UserProfileScreen from './UserProfileScreen';

const mapStateToProps = state => {
  //console.log('state is ',state)
  return {
    // auth: state.auth,
    // userProfile: _.get(state, 'userProfile'),
    // user: _.get(state, 'user', {}),
    userProfile: _.get(state,'userProfile',{} )
  }
};

export default connect(mapStateToProps,{getUserProfile})(UserProfileScreen);
