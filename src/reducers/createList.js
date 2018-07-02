import {combineReducers} from 'redux';
import * as types from '../actions/types';
import * as request from './requests';

const createList = (category) => {
    const ids = (state = [], action) => {
        switch (action.type) {
            case types.FETCH_POLLS_SUCCESS:
                return action.category === category ?
                    action.response.result :
                    state;
            case types.ADD_POLL_SUCCESS:
                return [action.response.result, ...state];
            default:
                return state;
        }
    };
    const requestCheck = action => {
        return action.category !== category;
    };
    const isFetching = request.isFetching(requestCheck);
    const errorMessage = request.errorMessage(requestCheck);
    return combineReducers({ids, isFetching, errorMessage});
};

export default createList;

export const getIds = (state) => state.ids;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;