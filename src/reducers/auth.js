/* eslint-disable indent */
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
    const isFetching = (state = false, action) => {
        switch (action.type) {
            case types.FETCH_TOKEN_REQUEST:
                return true;
            case types.FETCH_TOKEN_SUCCESS:
            case types.FETCH_TOKEN_FAILURE:
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
                return null;
            default:
                return state;
        }
    };
    return combineReducers({token, isFetching, errorMessage});
};

export default auth;

export const getToken = (state) => {
    return state.auth.token;
};

export const getIsFetching = (state) => {
    return state.auth.isFetching;
};

export const getErrorMessage = (state) => {
    return state.auth.errorMessage;
};