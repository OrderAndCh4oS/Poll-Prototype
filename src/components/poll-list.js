/* eslint-disable react/prop-types */
import React, {Component} from 'react';
import Poll from './poll';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {withRouter} from 'react-router-dom';
import {getErrorMessage, getIsFetching, getPolls} from '../reducers';
import FetchError from './fetch-error';

class PollList extends Component {
    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.category !== this.props.category) {
            this.fetchData();
        }
    }

    fetchData() {
        const {category, fetchPolls} = this.props;
        fetchPolls(category).then(() => console.log('done!'));
    }

    render() {
        const {vote, polls, errorMessage, isFetching} = this.props;
        if(isFetching && !polls.length) {
            return <p>Loading...</p>;
        }
        if(errorMessage && !polls.length) {
            return <FetchError
                message={errorMessage}
                onRetry={() => this.fetchData()}
            />;
        }
        return (
            <div className={'poll-list'}>
                {polls.map((poll) => (
                    <Poll key={poll.id} {...poll} onVoteClick={vote}/>
                ))}
            </div>
        );
    }
}

const mapStateToPollListProps = (state, {match}) => {
    const category = match.params.category || 'all';
    return {
        polls: getPolls(state, category),
        isFetching: getIsFetching(state, category),
        errorMessage: getErrorMessage(state, category),
        category
    };
};

const VisiblePollList = withRouter(connect(
    mapStateToPollListProps,
    actions
)(PollList));

export default VisiblePollList;