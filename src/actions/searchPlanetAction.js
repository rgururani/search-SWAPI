import * as types from '../constants/actionTypes';
import StarWarsApi from '../api/mockStarWarsApi';
import toastr from 'toastr';


export function getUser(){
  return { type: types.GET_USER};
}

export function loadplanetSuccess(planets) {
  return { type: types.Planet_FETCH_SUCCESS, planets};
}

export function loadplanet(planet = '') {
  if(planet == ''){
    return function (dispatch) {
      dispatch(loadplanetSuccess([]));
    };
  }
  return function (dispatch) {
    return StarWarsApi.SearchByPlaneName(planet).then(planets => {
        dispatch(loadplanetSuccess(planets));
    }).catch(error => {
      dispatch(loadplanetSuccess([]));
      toastr.error(error);
    });
  };
}

