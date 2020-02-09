
import * as types from './../constants/projects';
import { ENDPOINTS } from '../utils/URL';
import httpService from '../services/httpService';


export const fetchAllProjects = () => {
  const url = ENDPOINTS.PROJECTS;
  return async dispatch => {
    const res = await httpService.get(url);

    // Dispatch the action object
    await dispatch(getAllProjects(res.data));
  };
};


export const postNewProject = (projectName, isActive) => {
  const url = ENDPOINTS.PROJECTS;
  console.log("Call API: ", url);
  return async dispatch => {
    let status = 200;
    let _id = null;

    try {
      const res = await httpService.post(url, { projectName, isActive })
      _id = res.data._id;
      status = res.status;

    } catch (err) {
      console.log("TRY CATCH ERR", err);
      status = 400;
    }

    dispatch(
      addNewProject(
        {
          "_id": _id,
          "projectName": projectName,
          "isActive": isActive

        },
        status
      ));

  }
}

export const deleteProject = projectId => {
	const url = ENDPOINTS.PROJECT + projectId

	console.log('Delete', projectId)

	return async dispatch => {
		let status = 200

		try {
			const res = await httpService.delete(url)
      status = res.status
      dispatch(removeProject(projectId, status))

		} catch (err) {
			console.log("CAN'T DELETE", err)
			status = 400
		}

	
	}
}


export const getAllProjects = payload => {
  return {
    type: types.GET_ALL_PROJECTS,
    payload
  };
};

export const removeProject = (payload, status) => {
  console.log(payload)
	return {
		type: types.DELETE_PROJECT,
		payload,
		status
	}
}

export const addNewProject = (payload, status) => {
  return {
    type: types.ADD_NEW_PROJECT,
    payload,
    status
  }
}