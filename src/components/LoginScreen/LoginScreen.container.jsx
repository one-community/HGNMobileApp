import { connect } from 'react-redux'
import _ from 'lodash'

import { loginUser } from "../../actions/authActions"


import LoginScreen from './LoginScreen'

const mapStateToProps = state => ({
	auth: state.auth,
	userProfile: _.get(state, 'userProfile'),
	user: _.get(state, 'user', {})
})

export default connect(mapStateToProps, {
  loginUser
})(LoginScreen)
