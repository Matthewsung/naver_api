import { GET_USER_DATA, SEARCHED_DATA } from './ActionType';

export const getUserData = ( data ) => {
  return {
    type: GET_USER_DATA,
    data
  }
};

export const searchedData = ( data ) => {
  return {
    type: SEARCHED_DATA,
    data
  }
};