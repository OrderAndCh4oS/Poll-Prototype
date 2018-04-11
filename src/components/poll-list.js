import React from 'react';
import Poll from './poll';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {vote} from '../actions/poll';

const PollList = ({polls, onVoteClick}) =>
    <div className={'poll-list'}>
        {polls.map((poll, index) => (
            <Poll key={index} {...poll} onVoteClick={onVoteClick} />
        ))}
    </div>
;

PollList.propTypes = {
    polls: PropTypes.array.isRequired,
    onVoteClick: PropTypes.func.isRequired
};

const mapStateToPollListProps = (state) => ({
    polls: state.polls,
});
const mapDispatchToPollListProps = (dispatch) => ({
    onVoteClick: (id, voted, createdAt) => {
        return dispatch(vote(id, voted, createdAt));
    }
});
const VisiblePollList = connect(mapStateToPollListProps, mapDispatchToPollListProps)(PollList);

export default VisiblePollList;