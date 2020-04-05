import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchAllProjects,postNewProject,deleteProject } from '../../actions/projects';
import { openModal} from '../../actions/modalActions';
import { loginUser,logoutUser } from '../../actions/authActions';
import ProjectsScreen from './ProjectsScreen';

const mapStateToProps = state => {
  return {
    allProjects: _.get(state, 'allProjects', [])
  };
};

export default connect(mapStateToProps, {
  fetchAllProjects,postNewProject,deleteProject,logoutUser,openModal
})(ProjectsScreen);
