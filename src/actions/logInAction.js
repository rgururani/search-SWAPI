import * as types from '../constants/actionTypes';
import StarWarsApi from '../api/mockStarWarsApi';

export function userAuth(user) {
  return { type: types.USER_AUTHENTICATED, user};
}

export function loadUser(userId = '' , password = '') {
  if(userId == '' || password == ''){
    return (function () {
      throw("Plaese enter both UserId Password to Login");
    });
  }

  return function (dispatch) {

    return StarWarsApi.SearchByUserName(userId).then(user => {
      if(user.length === 1 ){
        let userObject = user[0];
      if( userObject.birth_year.toLowerCase() == password.toLowerCase() && userObject.name.toLowerCase() == userId.toLowerCase())
        dispatch(userAuth(userObject.name));
      }
      else
        throw("User Name and Date of birth do not match");
    }).catch(error => {

      throw(error);
    });
  };
}

