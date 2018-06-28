const byId = (state = {}, action) => {
    if (action.response) {
        return {
            ...state,
            ...action.response.entities.polls
        };
    }
    return state;
};

export default byId;

export const getPoll = (state, id) => state[id];