import { connect } from 'react-redux'
import _ from 'lodash'

import { loginUser } from "../../actions/authActions"


import LoginScreen from './LoginScreen'

const mapStateToProps = state => ({

	isAuthenticated: _.get(state, 'auth.isAuthenticated',false),

})

export default connect(mapStateToProps, {
  loginUser
})(LoginScreen)
