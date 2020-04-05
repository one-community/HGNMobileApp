import { OPEN_MODAL,CLOSE_MODAL } from '../constants/modal';

const initialState={open:false,message:'',confirmButtonText:'',cancelButtonText:''}

export const modalReducer = (state=initialState, action) => {
  if (action.type === OPEN_MODAL) {
    return action.payload;
  }

  if (action.type === CLOSE_MODAL) {
    return initialState;
  }

  return initialState;
};
