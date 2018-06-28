import {combineReducers} from 'redux';

const createList = (category) => {
    const ids = (state = [], action) => {
        switch (action.type) {
        case 'FETCH_POLLS_SUCCESS':
            return action.category === category ?
                action.response.result :
                state;
        default:
            return state;
        }
    };
    const isFetching = (state = false, action) => {
        if (action.category !== category) {
            return state;
        }
        switch (action.type) {
        case 'FETCH_POLLS_REQUEST':
            return true;
        case 'FETCH_POLLS_SUCCESS':
        case 'FETCH_POLLS_FAILURE':
            return false;
        default:
            return state;
        }
    };
    const errorMessage = (state = null, action) => {
        if (category !== action.category) {
            return state;
        }
        switch (action.type) {
        case 'FETCH_POLLS_FAILURE':
            return action.message;
        case 'FETCH_POLLS_REQUEST':
        case 'FETCH_POLLS_SUCCESS':
            return null;
        default:
            return state;
        }

    };
    return combineReducers({ids, isFetching, errorMessage});
};

export default createList;

export const getIds = (state) => state.ids;
export const getIsFetching = (state) => state.isFetching;
export const getErrorMessage = (state) => state.errorMessage;