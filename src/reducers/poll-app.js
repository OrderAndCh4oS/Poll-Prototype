import {ADD_POLL, VOTE} from '../actions/types';
import {addPoll, vote} from './poll';

const initialState = {
    user: 0,
    polls: [],
    users: [
        {
            id: 0,
            name: 'Tiny Tim',
        },
        {
            id: 1,
            name: 'Scrooge',
        }
    ]
};

const pollApp = (state = initialState, action) => {
    switch (action.type) {
    case ADD_POLL:
        return Object.assign({}, state, {
            polls: addPoll(state.polls, action)
        });
    case VOTE:
        return Object.assign({}, state, {
            polls: vote(state.polls, action)
        });
    default:
        return state;
    }
};

export default pollApp;
