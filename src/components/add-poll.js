/* eslint-disable react/prop-types */
import React from 'react';
import {connect} from 'react-redux';
import * as polls from '../reducers/polls';
import * as actions from '../actions';
import {withRouter} from 'react-router-dom';

let AddPoll = ({isAdding, errorMessage, invalidData, addPoll, category}) => {
    let input;

    const messages = () => {
        switch (true) {
            case isAdding:
                return <p>Adding poll...</p>;
            case errorMessage !== null:
                return <p>There was an error adding the poll: {errorMessage.message}</p>;
            case invalidData !== null:
                return <p>Invalid data entered.</p>;
        }
    };

    const questionStyles = () => {
        if (invalidData !== null && invalidData.hasOwnProperty('question_text')) {
            return {'backgroundColor': '#ffd1d5'};
        }
    };

    return (
        <div className={'add-poll'}>
            <h2>Add Poll</h2>
            <label>
                Question: <input ref={node => input = node} style={questionStyles()}/>
            </label>
            <button onClick={() => {
                addPoll(input.value, category);
                input.value = '';
            }}>Ask
            </button>
            {messages()}
        </div>
    );
};

const mapStateToAddPollProps = (state, {match}) => {
    return {
        isAdding: polls.getIsAdding(state.polls),
        errorMessage: polls.getAddErrorMessage(state.polls),
        invalidData: polls.getAddInvalidData(state.polls),
        category: match.params.category
    };
};

AddPoll = withRouter(connect(mapStateToAddPollProps, actions)(AddPoll));

export default AddPoll;

