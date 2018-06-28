import byId, * as fromById from './byId';
import createList, * as fromList from './createList';
import {combineReducers} from 'redux';

// const initialState = {
//     user: 0,
//     polls: [],
//     users: [
//         {
//             id: 0,
//             name: 'Default User',
//         }
//     ]
// };
//
// const index = (state = initialState, action) => {
//     switch (action.type) {
//     case types.ADD_POLL:
//         return Object.assign({}, state, {
//             polls: addPoll(state.polls, action)
//         });
//     case types.VOTE:
//         return Object.assign({}, state, {
//             polls: vote(state.polls, action)
//         });
//     default:
//         return state;
//     }
// };
//
// export default index;


const listByCategory = combineReducers({
    all: createList('all'),
    politics: createList('politics'),
    news: createList('news')
});

const index = combineReducers({byId, listByCategory});

export default index;


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
