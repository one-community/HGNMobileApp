import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchAllProjects,postNewProject,deleteProject } from '../../actions/projects';
import {getAllUserProfiles,} from '../../actions/allUserProfiles'
import { openModal} from '../../actions/modalActions';
import {fetchAllMembers,addProjectMember} from '../../actions/projectMembers'
import { loginUser,logoutUser } from '../../actions/authActions';
import UsersList from './UsersList';

const mapStateToProps = state => {
  //console.log('projectMembers is Project Container',state)
  return {
    allUserProfiles: _.get(state, 'allUserProfiles', [])
  };
};

export default connect(mapStateToProps, {
  getAllUserProfiles,logoutUser,addProjectMember,openModal
})(UsersList);
