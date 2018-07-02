import * as types from '../actions/types';

const isFetching = (check = () => true) => (state = false, action) => {
    if (check(action)) {
        return state;
    }
    switch (action.type) {
        case types.FETCH_POLLS_REQUEST:
            return true;
        case types.FETCH_POLLS_SUCCESS:
        case types.FETCH_POLLS_FAILURE:
            return false;
        default:
            return state;
    }
};
const errorMessage = (check) => (state = null, action) => {
    if (check(action)) {
        return state;
    }
    switch (action.type) {
        case types.FETCH_POLLS_FAILURE:
            return action.message;
        case types.FETCH_POLLS_REQUEST:
        case types.FETCH_POLLS_SUCCESS:
            return null;
        default:
            return state;
    }
};

export {isFetching, errorMessage};