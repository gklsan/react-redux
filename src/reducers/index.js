import * as Constants from '../helpers/constants'
import { combineReducers } from 'redux';


const InfoReducer = (state = [], action) => {
  switch (action.type){
    case Constants.addUser:
      return [
        ...state,
        Object.assign({}, action.data)
      ];
    case Constants.removeUser:
      return state.filter((data, i) => i !== action.id);
    default:
      return state;
  }
};

export default combineReducers({
  data: InfoReducer
});