import * as types from './../constants/projects';
export const allProjectsReducer = (allProjects = [], action) => {
  if (action.type === types.GET_ALL_PROJECTS) {
    return action.payload;
  }
  else if(action.type===types.ADD_NEW_PROJECT)
  {



    return allProjects.concat(action.payload)


  }
  else if(action.type===types.DELETE_PROJECT)
  {


    const updated=allProjects.filter(item => {

    



    return item._id!==  action.payload 
    });
 

  return updated
    
  }


 

  return allProjects;
};
