import {VOTE_TYPE} from '../actions/types';

const addPoll = (state, action) => {
    const poll = {
        id: state.length + 1,
        question: action.question,
        votes: {yes: 0, not_sure: 0, no: 0},
        user: state.user,
        createdAt: action.createdAt
    };
    return [...state, poll];
};

const vote = (state, action) => {
    return state.map((poll) => {
        if (action.pollId !== poll.id) {
            return poll;
        }
        const votes = Object.assign({}, poll.votes);

        switch (poll.current_user_has_voted) {
        case false:
            break;
        case VOTE_TYPE.YES:
            votes.yes--;
            break;
        case VOTE_TYPE.NOT_SURE:
            votes.notSure--;
            break;
        case VOTE_TYPE.NO:
            votes.no--;
            break;
        }

        switch (action.voted) {
        case VOTE_TYPE.YES:
            votes.yes++;
            break;
        case VOTE_TYPE.NOT_SURE:
            votes.notSure++;
            break;
        case VOTE_TYPE.NO:
            votes.no++;
            break;
        }

        return Object.assign({}, poll, {
            votes,
            current_user_has_voted: action.voted
        });
    });
};

export {addPoll, vote};