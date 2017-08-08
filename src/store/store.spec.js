import * as ActionTypes from '../constants/actionTypes';
import { createStore } from 'redux';

import initialState from '../reducers/initialState';
import rootReducer from '../reducers';

describe('Store', () => {

  it('should display results when necessary data is provided', () => {
    const store = createStore(rootReducer, initialState);

    const actions = [
    ];
    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();
    const expected = {
      user : '',
      planets: [],
      routing: {
        locationBeforeTransitions:null
      }

    };

    expect(actual).toEqual(expected);
  });

  it('should not display results when necessary data is not provided', () => {
    const store = createStore(rootReducer, initialState);

    const actions = [
    ];

    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();

    const expected = {
      user : '',
      planets: [],
      routing: {
        locationBeforeTransitions:null
      }
    };


    expect(actual).toEqual(expected);
  });


  it('should handle a flurry of actions', () => {
    const store = createStore(rootReducer, initialState);

    const actions = [

    ];
    actions.forEach(action => store.dispatch(action));

    const moreActions = [

    ];

    moreActions.forEach(action => store.dispatch(action));

    const actual = store.getState();
    const expected = {
      user : '',
      planets: [],
      routing: {
        locationBeforeTransitions:null
      }
    };


    expect(actual).toEqual(expected);
  });
});
