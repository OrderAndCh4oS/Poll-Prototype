import {combineReducers} from 'redux';
import * as types from '../actions/types';

const auth = () => {
    const token = (state = null, action) => {
        switch (action.type) {
            case types.FETCH_TOKEN_SUCCESS:
                return action.token;
            default:
                return state;
        }
    };
    const failedLogin = (state = {}, action) => {
        switch (action.type) {
            case types.FETCH_TOKEN_FIELD_ERRORS:
            case types.FETCH_TOKEN_NON_FIELD_ERRORS:
                return {errors: action.errors};
            default:
                return state;
        }
    };
    const isFetching = (state = false, action) => {
        switch (action.type) {
            case types.FETCH_TOKEN_REQUEST:
                return true;
            case types.FETCH_TOKEN_SUCCESS:
            case types.FETCH_TOKEN_FAILURE:
            case types.FETCH_TOKEN_FIELD_ERRORS:
            case types.FETCH_TOKEN_NON_FIELD_ERRORS:
                return false;
            default:
                return state;
        }
    };
    const errorMessage = (state = null, action) => {
        switch (action.type) {
            case types.FETCH_TOKEN_FAILURE:
                return action.message;
            case types.FETCH_TOKEN_REQUEST:
            case types.FETCH_TOKEN_SUCCESS:
                return state;
            default:
                return state;
        }
    };
    return combineReducers({token, failedLogin, isFetching, errorMessage});
};

export default auth;

export const getToken = (state) => {
    return state.token;
};

export const getFailedLogin = (state) => {
    return state.failedLogin;
};

export const getIsFetching = (state) => {
    return state.isFetching;
};

export const getErrorMessage = (state) => {
    return state.errorMessage;
};