import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import index from './reducers';

const configureStore = () => {
    const middlewares = [thunk];
    // eslint-disable-next-line no-undef
    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(createLogger());
    }

    return createStore(index, applyMiddleware(...middlewares));
};

export default configureStore;