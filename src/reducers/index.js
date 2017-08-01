import { combineReducers } from 'redux';
import user from './userReducer';
import planets from './planetReducer';
import {routerReducer} from 'react-router-redux';

const rootReducer = combineReducers({
  user,
  planets,
  routing: routerReducer
});

export default rootReducer;
