import {combineReducers} from 'redux';
import * as types from '../actions/types';
import request from './requests';

const createList = (category) => {
    const ids = (state = [], action) => {
        switch (action.type) {
            case types.FETCH_POLLS_SUCCESS:
                return action.category === category ?
                    action.response.result :
                    state;
            case types.ADD_POLL_SUCCESS:
                if (category === action.category || category === 'all') {
                    return [action.response.result, ...state];
                } else {
                    return state;
                }
            case types.FETCH_POLL_SUCCESS:
            default:
                return state;
        }
    };
    const requestCheck = action => {
        return action.category !== category;
    };
    const requestTypes = {
        requestType: types.FETCH_POLLS_REQUEST,
        successType: types.FETCH_POLLS_SUCCESS,
        failureType: types.FETCH_POLLS_FAILURE
    };
    const pollsRequest = request(requestCheck, requestTypes);
    return combineReducers({ids, pollsRequest});
};

export default createList;

export const getIds = (state) => state.ids;
export const getIsFetching = (state) => state.pollsRequest.isFetching;
export const getFetchErrorMessage = (state) => state.pollsRequest.errorMessage;