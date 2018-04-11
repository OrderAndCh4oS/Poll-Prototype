import React from 'react';
import {VOTE_TYPE} from '../actions/types';
import PropTypes from 'prop-types';

const PollCheckBox = ({pollId, onClick}) =>
    <div className={'poll-check-boxes'}>
        <button onClick={() => onClick(pollId, VOTE_TYPE.YES, new Date().toLocaleString())}>Yes</button>
        <button onClick={() => onClick(pollId, VOTE_TYPE.NOT_SURE, new Date().toLocaleString())}>Not Sure</button>
        <button onClick={() => onClick(pollId, VOTE_TYPE.NO, new Date().toLocaleString())}>No</button>
    </div>
;

PollCheckBox.propTypes = {
    pollId: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
};


export default PollCheckBox;


