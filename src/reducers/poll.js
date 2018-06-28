import {VOTE_TYPE} from '../actions/types';

const addPoll = (state, action) => {
    const poll = {
        id: state.length + 1,
        question: action.question,
        votes: {yes: 0, notSure: 0, no: 0},
        userId: state.user,
        createdAt: action.createdAt
    };
    return [...state, poll];
};

const populatePolls = (state, action) => {
    const polls = action.polls.map((poll) => {
        return {
            uid: poll.id,
            id: state.length + 1,
            question: poll.question_text,
            votes: poll.vote_count,
            userId: poll.owner,
            createdAt: poll.asked_at
        };
    });

    return [...state, ...polls];
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

export {addPoll, vote, populatePolls};