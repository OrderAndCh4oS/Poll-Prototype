import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addPoll} from '../actions/poll';

let AddPoll = ({dispatch}) => {
    let input;
    return (
        <div className={'add-poll'}>
            <h2>Add Poll</h2>
            <label>
                Question: <input ref={node => input = node}/>
            </label>
            <button onClick={() => {
                dispatch(addPoll(input.value, new Date().toLocaleString()));
                input.value = '';
            }}>Ask</button>
        </div>
    );
};

AddPoll.propTypes = {
    dispatch: PropTypes.func.isRequired
};

AddPoll = connect()(AddPoll);

export default AddPoll;

