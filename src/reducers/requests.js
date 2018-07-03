import {combineReducers} from 'redux';

const request = (check, {request, success, failure, invalid = null}) => {
    const isFetching = (state = false, action) => {
        if (typeof check === 'function' && check(action)) {
            return state;
        }
        switch (action.type) {
            case request:
                return true;
            case success:
            case failure:
            case invalid:
                return false;
            default:
                return state;
        }
    };
    const invalidRequest = (state = null, action) => {
        switch (action.type) {
            case invalid:
                return action.data;
            case request:
            case success:
            case failure:
                return null;
            default:
                return state;
        }
    };
    const errorMessage = (state = null, action) => {
        if (typeof check === 'function' && check(action)) {
            return state;
        }
        switch (action.type) {
            case failure:
                return action.message;
            case request:
            case success:
            case invalid:
                return null;
            default:
                return state;
        }
    };
    if (invalid !== null) {
        return combineReducers({isFetching, errorMessage, invalidRequest});
    } else {
        return combineReducers({isFetching, errorMessage});
    }
};

export default request;