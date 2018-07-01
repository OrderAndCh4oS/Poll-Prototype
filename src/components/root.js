import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {PropTypes} from 'prop-types';
import App from './app';
import LoginForm from './login';
import {connectedRouterRedirect} from 'redux-auth-wrapper/history4/redirect';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';

const userIsAuthenticated = connectedRouterRedirect({
    // The url to redirect user to if they fail
    redirectPath: '/login',
    // If selector is true, wrapper will not redirect
    // For example let's check that state contains user data
    authenticatedSelector: state => state.auth.token !== null,
    // A nice display name for this check
    wrapperDisplayName: 'UserIsAuthenticated'
});

const locationHelper = locationHelperBuilder({});

const userIsNotAuthenticated = connectedRouterRedirect({
    // This sends the user either to the query param route if we have one, or to the landing page if none is specified and the user is already logged in
    redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/',
    // This prevents us from adding the query parameter when we send the user away from the login page
    allowRedirectBack: false,
    // If selector is true, wrapper will not redirect
    // So if there is no user data, then we show the page
    authenticatedSelector: state => state.auth.token === null,
    // A nice display name for this check
    wrapperDisplayName: 'UserIsNotAuthenticated'
});

const Root = ({store}) => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={userIsNotAuthenticated(LoginForm)}/>
                <Route path="/:category?" component={userIsAuthenticated(App)}/>
            </Switch>
        </BrowserRouter>
    </Provider>
);

Root.propTypes = {
    store: PropTypes.object.isRequired
};

export default Root;