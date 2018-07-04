import {combineReducers} from 'redux';
import byId, * as fromById from './byId';
import createList, * as fromList from './createList';
import add, * as fromAdd from './add';

const listByCategory = combineReducers({
    all: createList('all'),
    Politics: createList('Politics'),
    News: createList('News')
});

const polls = combineReducers({byId, listByCategory, add});

export default polls;

export const getByCategory = (state, category) => {
    const ids = fromList.getIds(state.listByCategory[category]);
    return ids.map(id => fromById.getPoll(state.byId, id));
};

export const getIsFetching = (state, category) => {
    return fromList.getIsFetching(state.listByCategory[category]);
};

export const getFetchErrorMessage = (state, category) => {
    return fromList.getFetchErrorMessage(state.listByCategory[category]);
};

export const getIsAdding = (state) => {
    return fromAdd.getIsAdding(state);
};

export const getAddInvalidData = (state) => {
    return fromAdd.getAddInvalidData(state);
};

export const getAddErrorMessage = (state) => {
    return fromAdd.getAddErrorMessage(state);
};