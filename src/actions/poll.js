import {ADD_POLL, VOTE} from './types';

const addPoll = (question, createdAt) => {
    return {
        type: ADD_POLL,
        question,
        createdAt
    };
};

const vote = (pollId, voted, votedAt) => {
    return {
        type: VOTE,
        pollId,
        voted,
        votedAt
    };
};

export {addPoll, vote};