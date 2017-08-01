import * as ActionTypes from '../constants/actionTypes';
import * as ActionCreators from './logInAction';

describe('Actions', () => {

    const appState = {
        user: '',
        planets: []
    };


    it('should create an action on login Click', () => {
        const dispatch = jest.fn();
        const expected = {
            type: ActionTypes.USER_AUTHENTICATED,
            settings: appState
        };

        // we expect this to return a function since it is a thunk
        expect(typeof (ActionCreators.userAuth(appState))).toEqual('function');
        // then we simulate calling it with dispatch as the store would do
        ActionCreators.userAuth(appState)(dispatch);
        // finally assert that the dispatch was called with our expected action
        expect(dispatch).toBeCalledWith(expected);
    });


});
