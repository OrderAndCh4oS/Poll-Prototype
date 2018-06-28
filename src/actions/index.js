import {normalize} from 'normalizr';
import * as schema from './schema';
import * as api from '../api';
import * as types from './types';
import {getIsFetching} from '../reducers';


const fetchPolls = (category) => (dispatch, getState) => {
    if (getIsFetching(getState(), category)) {
        return Promise.resolve();
    }
    dispatch({
        type: types.FETCH_POLLS_REQUEST,
        category
    });
    return api.fetchQuestions(category).then((response) => response.json()).then(
        data => {
            console.log(data.results);
            dispatch({
                type: types.FETCH_POLLS_SUCCESS,
                category,
                response: normalize(data.results, schema.arrayOfPolls)
            });
        },
        error => {
            dispatch({
                type: types.FETCH_POLLS_FAILURE,
                category,
                message: error.message || 'Something went wrong'
            });
        }
    );
};
// fetchQuestions()
//     .then((response) => response.json())
//     .then((data) => store.dispatch(populatePolls(data.results)));


const addPoll = (question, createdAt) => {
    return {
        type: types.ADD_POLL,
        question,
        createdAt
    };
};

const vote = (pollId, voted, votedAt) => {
    return {
        type: types.VOTE,
        pollId,
        voted,
        votedAt
    };
};

export {addPoll, vote, fetchPolls};