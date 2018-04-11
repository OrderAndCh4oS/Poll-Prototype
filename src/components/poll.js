import React from 'react';
import PropTypes from 'prop-types';
import PollCheckBox from './poll-check-box';

const Poll = ({id, question, votes, createdAt, onVoteClick}) =>
    <div className={'poll'}>
        <h2 className={'question title'}>{question}</h2>
        <p className={'asked-at date'}>Asked on {createdAt}</p>
        <p className={'text'}>Yes: {votes.yes}, Not Sure: {votes.notSure}, No: {votes.no}</p>
        <PollCheckBox pollId={id} onClick={onVoteClick}/>
    </div>;

Poll.propTypes = {
    id: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    votes: PropTypes.object.isRequired,
    createdAt: PropTypes.string.isRequired,
    onVoteClick: PropTypes.func.isRequired
};

export default Poll;
