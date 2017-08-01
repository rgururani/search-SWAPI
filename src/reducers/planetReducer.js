import {Planet_FETCH_SUCCESS} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function planetReducer(state = initialState.planets, action) {
  switch (action.type) {
    case Planet_FETCH_SUCCESS:
      if (action.planets)
        return action.planets;
      else
        return state;

    default:
      return state;

  }
}
