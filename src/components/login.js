/* eslint-disable react/prop-types */
import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';
import * as auth from '../reducers/auth';
import FetchError from './fetch-error';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: ''
        };
    }

    componentDidMount() {
        this.checkToken();
    }

    checkToken() {
        const {getToken} = this.props;
        if (getToken) {
            console.log('has a token');
        }
    }

    componentDidUpdate() {
        this.checkToken();
    }

    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    };

    handleSubmit = () => {
        const {fetchToken} = this.props;
        fetchToken(this.state.username, this.state.password);
    };

    render() {
        const {isFetching, errorMessage, failedLogin} = this.props;
        if (isFetching) {
            return <p>Logging In...</p>;
        }
        if (failedLogin.errors) {
            return <p>Oh No!</p>;
        }
        if (errorMessage) {
            return <FetchError
                message={errorMessage}
                onRetry={() => this.fetchData()}
            />;
        }
        return (
            <div>
                <h1>Login</h1>
                <label>Username
                    <input type="text" name="username" value={this.state.username} onChange={this.handleInputChange}/>
                </label>
                <label>Password
                    <input type="password" name="password" value={this.state.password} onChange={this.handleInputChange}/>
                </label>
                <input type="submit" value="Login" onClick={this.handleSubmit}/>
            </div>
        );
    }
}

const mapStateToLoginProps = (state) => {
    return {
        getToken: auth.getToken(state.auth),
        isFetching: auth.getIsFetching(state.auth),
        errorMessage: auth.getErrorMessage(state.auth),
        failedLogin: auth.getFailedLogin(state.auth)
    };
};

const LoginForm = withRouter(connect(
    mapStateToLoginProps,
    actions
)(Login));

export default LoginForm;