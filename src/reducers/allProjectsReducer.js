import * as types from './../constants/projects';
export const allProjectsReducer = (allProjects = [], action) => {
  if (action.type === types.GET_ALL_PROJECTS) {
    return action.payload;
  }
  else if(action.type===types.ADD_NEW_PROJECT)
  {

    console.log("PAYLOAD ADD", action.payload)

    return allProjects.concat(action.payload)


  }
  else if(action.type===types.DELETE_PROJECT)
  {

    console.log( allProjects.length)
    const updated=allProjects.filter(item => {

    

      console.log(typeof item._id,  action.payload)

    return item._id!==  action.payload 
    });
    console.log(updated.length,allProjects.length)

  return updated
    
  }


 

  return allProjects;
};
