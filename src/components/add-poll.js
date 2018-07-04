/* eslint-disable react/prop-types */
import React from 'react';
import {connect} from 'react-redux';
import CategorySelect from './category-select';
import * as polls from '../reducers/polls';
import * as actions from '../actions';

let AddPoll = ({isAdding, errorMessage, invalidData, addPoll}) => {
    let input;
    let category = '';

    const handleCategoryChange = (event) => {
        category = event.target.value;
    };

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
            <CategorySelect onChange={handleCategoryChange}/>
            <button onClick={() => {
                addPoll(input.value, category);
                input.value = '';
            }}>Ask
            </button>
            {messages()}
        </div>
    );
};

const mapStateToAddPollProps = (state) => {
    return {
        isAdding: polls.getIsAdding(state.polls),
        errorMessage: polls.getAddErrorMessage(state.polls),
        invalidData: polls.getAddInvalidData(state.polls)
    };
};

AddPoll = connect(mapStateToAddPollProps, actions)(AddPoll);

export default AddPoll;

