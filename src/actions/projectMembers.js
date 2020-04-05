import httpService from '../services/httpService';
import * as types from './../constants/projectMembership';
import { ENDPOINTS } from '../utils/URL';

export const fetchAllMembers = projectId => {
  const request = httpService.get(ENDPOINTS.PROJECT_MEMBERS(projectId));

  return async dispatch => {
    await dispatch(setMemberStart());
    request
      .then(res => {
        dispatch(setMembers(res.data));
      })
      .catch(err => {
        console.log('Error', err);
        dispatch(setMembersError(err));
      });
  };
};

export const addProjectMember=(projectId,user)=>{




  const request = httpService.post(ENDPOINTS.PROJECT_MEMBERS(projectId), {
    projectId,
    users: [{
      userId:user._id,
      operation:'Assign'
    }]
  });


  return async dispatch => {
    request.then(res => {


        dispatch(assignNewMember({
          _id: user._id,
          firstName:user.firstName,
          lastName:user.firstName
        }));
       // dispatch(removeFoundUser(userId))
   
    }).catch((err) => {
      console.log("Error", err);
      //dispatch(addNewMemberError(err));
    })
  }

  

}


export const removeProjectMember=(projectId,user)=>{




  const request = httpService.post(ENDPOINTS.PROJECT_MEMBERS(projectId), {
    projectId,
    users: [{
      userId:user._id,
      operation:'unAssign'
    }]
  });


  return async dispatch => {
    request.then(res => {
      console.log("RES", res);
      dispatch(deleteMember(user._id));

   
    }).catch((err) => {
      console.log("Error", err);
      //dispatch(addNewMemberError(err));
    })
  }

  

}

export const setMemberStart = () => {
  return {
    type: types.FETCH_MEMBERS_START
  };
};

/**
 * set Members in store
 * @param payload : Members []
 */
export const setMembers = members => {
  return {
    type: types.RECEIVE_MEMBERS,
    members
  };
};

/**
 * Error when setting project
 * @param payload : error status code
 */
export const setMembersError = err => {
  return {
    type: types.FETCH_MEMBERS_ERROR,
    err
  };
};

/**
 * add new member to project
 * @param member : {}
 */
export const assignNewMember = (member) => {

  return {
    type: types.ADD_NEW_MEMBER,
    member
  }
}


/**
 * remove a member from project
 * @param userId : _id 
 */
export const deleteMember = (userId) => {
  return {
    type: types.DELETE_MEMBER,
    userId
  }
}
