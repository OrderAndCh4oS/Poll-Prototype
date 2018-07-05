import * as types from '../actions/types';
import request from './requests';
import {combineReducers} from 'redux';

const selectCategory = (state = 'Politics', action) => {
    if (action.category) {
        return action.category;
    }
    return state;
};

const requestTypes = {
    request: types.ADD_POLL_REQUEST,
    success: types.ADD_POLL_SUCCESS,
    failure: types.ADD_POLL_FAILURE,
    invalid: types.ADD_POLL_INVALID
};

const add = combineReducers({selectCategory, request: request(undefined, requestTypes)});

export default add;

export const getSelectedCategory = (state) => state.add.selectCategory;
export const getIsAdding = (state) => state.add.request.isFetching;
export const getAddErrorMessage = (state) => state.add.request.errorMessage;
export const getAddInvalidData = (state) => state.add.request.invalidRequest;
