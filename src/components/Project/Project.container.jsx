import { connect } from 'react-redux';
import _ from 'lodash';

import { deleteProject } from '../../actions/projects';
import { fetchAllMembers, removeProjectMember } from '../../actions/projectMembers';
import { loginUser, logoutUser } from '../../actions/authActions';
import { openModal } from '../../actions/modalActions';
import Project from './Project';

const mapStateToProps = state => {
  return {
    projectMembers: _.get(state, 'projectMembers.members', [])
  };
};

export default connect(mapStateToProps, {
  fetchAllMembers,
  deleteProject,
  logoutUser,
  removeProjectMember,
  openModal
})(Project);
