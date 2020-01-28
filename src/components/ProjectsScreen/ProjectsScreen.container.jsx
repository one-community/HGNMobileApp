import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchAllProjects } from '../../actions/projects';

import ProjectsScreen from './ProjectsScreen';

const mapStateToProps = state => {
  return {
    allProjects: _.get(state, 'allProjects', [])
  };
};

export default connect(mapStateToProps, {
  fetchAllProjects
})(ProjectsScreen);
