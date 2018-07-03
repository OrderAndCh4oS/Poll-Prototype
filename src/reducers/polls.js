import byId, * as fromById from './byId';
import createList, * as fromList from './createList';
import {combineReducers} from 'redux';
import request from './requests';
import * as types from '../actions/types';

const requestTypes = {
    request: types.ADD_POLL_REQUEST,
    success: types.ADD_POLL_SUCCESS,
    failure: types.ADD_POLL_FAILURE,
    invalid: types.ADD_POLL_INVALID
};
const add = request(undefined, requestTypes);

const listByCategory = combineReducers({
    all: createList('all'),
    politics: createList('politics'),
    news: createList('news')
});

const polls = combineReducers({byId, listByCategory, add});

export default polls;

export const getPolls = (state, category) => {
    const ids = fromList.getIds(state.listByCategory[category]);
    return ids.map(id => fromById.getPoll(state.byId, id));
};

export const getIsFetching = (state, category) => {
    return fromList.getIsFetching(state.listByCategory[category]);
};

export const getFetchErrorMessage = (state, category) => {
    return fromList.getFetchErrorMessage(state.listByCategory[category]);
};