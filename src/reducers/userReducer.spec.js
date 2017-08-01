import * as ActionTypes from '../constants/actionTypes';
import reducer from './userReducer';

describe('Reducers::UserReducer', () => {
    const getInitialState = () => {
        return {
            user: '',
            planets: []
        };
    };

    const getAppState = () => {
        return {
            user: 'hello',
            planets: []
        };
    };

    it('should set initial state by default', () => {
        const action = { type: 'unknown' };
        const expected = getInitialState();

        expect(reducer(undefined, action)).toEqual(expected);
    });

    it('should handle USER_AUTHENTICATED', () => {
        const action = { type: ActionTypes.USER_AUTHENTICATED, user:test,  settings: getAppState() };
        const expected = Object.assign(getAppState(), {user:test});

        expect(reducer(getAppState(), action)).toEqual(expected);
    });

    it('should handle GET_USER', () => {
        const action = { type: ActionTypes.GET_USER,  settings: getAppState() };
        const expected = Object.assign(getAppState());

        expect(reducer(getAppState(), action)).toEqual(expected);
    });
});
