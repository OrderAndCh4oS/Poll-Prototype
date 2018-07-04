import * as types from '../actions/types';
import request from './requests';

const requestTypes = {
    request: types.ADD_POLL_REQUEST,
    success: types.ADD_POLL_SUCCESS,
    failure: types.ADD_POLL_FAILURE,
    invalid: types.ADD_POLL_INVALID
};
const add = request(undefined, requestTypes);

export default add;

export const getIsAdding = (state) => state.add.isFetching;
export const getAddErrorMessage = (state) => state.add.errorMessage;
export const getAddInvalidData = (state) => state.add.invalidRequest;