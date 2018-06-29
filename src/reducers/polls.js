import byId, * as fromById from './byId';
import createList, * as fromList from './createList';
import {combineReducers} from 'redux';

const listByCategory = combineReducers({
    all: createList('all'),
    politics: createList('politics'),
    news: createList('news')
});

const polls = combineReducers({byId, listByCategory});

export default polls;

export const getPolls = (state, category) => {
    const ids = fromList.getIds(state.listByCategory[category]);
    return ids.map(id => fromById.getPoll(state.byId, id));
};

export const getIsFetching = (state, category) => {
    return fromList.getIsFetching(state.listByCategory[category]);
};

export const getErrorMessage = (state, category) => {
    return fromList.getErrorMessage(state.listByCategory[category]);
};