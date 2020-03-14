import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchAllProjects,postNewProject,deleteProject } from '../../actions/projects';
import {fetchAllMembers} from '../../actions/projectMembers'
import { loginUser,logoutUser } from '../../actions/authActions';
import Project from './Project';

const mapStateToProps = state => {
 
  return {
    projectMembers: _.get(state, 'projectMembers.members', [])
  };
};

export default connect(mapStateToProps, {
  fetchAllMembers,deleteProject,logoutUser
})(Project);
