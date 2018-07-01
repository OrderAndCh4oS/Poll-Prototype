import {normalize} from 'normalizr';
import * as schema from './schema';
import * as api from '../api';
import * as types from './types';
import {getIsFetching} from '../reducers/polls';

const fetchPolls = (category) => (dispatch, getState) => {
    if (getIsFetching(getState().polls, category)) {
        return Promise.resolve();
    }
    dispatch({
        type: types.FETCH_POLLS_REQUEST,
        category
    });
    return api.fetchPolls(category).then((response) => response.json()).then(
        data => dispatch({
            type: types.FETCH_POLLS_SUCCESS,
            category,
            response: normalize(data.results, schema.arrayOfPolls)
        }),
        error => {
            dispatch({
                type: types.FETCH_POLLS_FAILURE,
                category,
                message: error.message || 'Something went wrong'
            });
        }
    );
};
const fetchToken = (username, password) => (dispatch) => {
    // if (getIsFetching(getState())) {
    //     return Promise.resolve();
    // }
    dispatch({
        type: types.FETCH_TOKEN_REQUEST,
        username,
        password
    });
    return api.fetchToken(username, password).then((response) => response.json()).then(
        data => {
            console.log('data', data);
            switch (true) {
                case data.hasOwnProperty('token'):
                    console.log('token');
                    dispatch({
                        type: types.FETCH_TOKEN_SUCCESS,
                        token: data.token
                    });
                    break;
                case data.hasOwnProperty('non_field_errors'):
                    console.log('non_field');
                    dispatch({
                        type: types.FETCH_TOKEN_NON_FIELD_ERRORS,
                        errors: data.non_field_errors
                    });
                    break;
                case (data.hasOwnProperty('username') || data.hasOwnProperty('password')):
                    console.log('field');
                    dispatch({
                        type: types.FETCH_TOKEN_FIELD_ERRORS,
                        errors: {username: data.username || '', password: data.password || ''}
                    });
            }
        },
        error => {
            console.log('here');
            dispatch({
                type: types.FETCH_TOKEN_FAILURE,
                message: error.message || 'Something went wrong'
            });
        }
    );
};

const addPoll = (questionText, category) => (dispatch) => {
    return api.postPoll(questionText, category).then((response) => response.json()).then(data => {
        console.log(data);
        return dispatch({
            type: types.ADD_POLL,
            category,
            response: normalize(data.results, schema.poll)
        });
    });
};

const vote = (pollId, vote) => (dispatch) => {
    return api.postVote(pollId, vote).then((response) => response.json()).then(data => {
        console.log(data);
        return dispatch({
            type: types.VOTE,
            pollId,
            vote,
            response: normalize(data.results, schema.poll)
        });
    });
};

export {addPoll, vote, fetchPolls, fetchToken};