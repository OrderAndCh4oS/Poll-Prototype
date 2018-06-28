import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import {PropTypes} from 'prop-types';
import App from './app';

const Root = ({store}) => (
    <Provider store={store}>
        <BrowserRouter>
            <Route path="/:category?" component={App} />
        </BrowserRouter>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;