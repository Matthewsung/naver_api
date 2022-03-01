import { GET_USER_DATA, SEARCHED_DATA } from './ActionType';

const initState = {
  userData: {
    startDate: "",
    endDate: "",
    category: "",
    keyword: "",
    timeUnit: "",
    ages: [],
    gender: "",
    device: "",
  },
  seachedData: []
};

const reducer = (state = initState, action) => {
  switch(action.type) {
    case GET_USER_DATA :
      return {
        ...state,
        userData: action.data,
      }

    case SEARCHED_DATA : 
      return {
        ...state,
        seachedData: action.data,
      }
    default : return state
  }
};

export default reducer;