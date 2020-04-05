import httpService from '../services/httpService';
import { ENDPOINTS } from '../utils/URL';
import { closeModal as closeModalActionCreator,openModal as openModalActionCreator } from '../constants/modal';
export const openModal = (payload) => {
  console.log('openModal called')
  return async dispatch => {

    await dispatch(openModalActionCreator(payload));
  };
};

export const closeModal = (payload) => {
  console.log('closeModal called')
  return async dispatch => {

    await dispatch(closeModalActionCreator());
  };
};
