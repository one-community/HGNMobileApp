import { connect } from 'react-redux';
import _ from 'lodash';

import { deleteProject } from '../../actions/projects';
import { fetchAllMembers, removeProjectMember } from '../../actions/projectMembers';
import { loginUser, logoutUser } from '../../actions/authActions';
import { closeModal } from '../../actions/modalActions';
import ModalScreen from './ModalScreen';

const mapStateToProps = state => {
  return {
    modal: _.get(state, 'modal', [])
  };
};

export default connect(mapStateToProps, {
  fetchAllMembers,
  deleteProject,
  logoutUser,
  removeProjectMember,
  closeModal
})(ModalScreen);
