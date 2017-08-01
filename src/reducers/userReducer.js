import {GET_USER, USER_AUTHENTICATED} from '../constants/actionTypes';
import initialState from './initialState';

export default function userAuthentication(state = initialState.user, action) {
  switch (action.type) {
    case GET_USER:
      return state;
    case USER_AUTHENTICATED:
      if (action.user)
        return action.user;
      else
        return state;
    default:
      return state;
  }
}
