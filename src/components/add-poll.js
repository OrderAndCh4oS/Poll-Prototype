/* eslint-disable react/prop-types */
import React from 'react';
import {connect} from 'react-redux';
import * as polls from '../reducers/polls';
import * as actions from '../actions';
import CategorySelect from './category-select';

let AddPoll = ({request, addPoll, getSelectedCategory, selectCategory}) => {
    let input;

    const messages = () => {
        switch (true) {
            case request.isAdding:
                return <p>Adding poll...</p>;
            case request.errorMessage !== null:
                return <p>There was an error adding the poll: {request.errorMessage.message}</p>;
            case request.invalidData !== null:
                return <p>Invalid data entered.</p>;
        }
    };

    const questionStyles = () => {
        if (request.invalidData !== null) {
            if (request.invalidData.hasOwnProperty('question_text')) {
                return {'backgroundColor': '#ffd1d5'};
            }
        }
    };

    return (
        <div className={'add-poll'}>
            <h2>Add Poll</h2>
            <label>
                Question: <input ref={node => input = node} style={questionStyles()}/>
            </label>
            <CategorySelect handleChange={(event) => selectCategory(event.target.value)}/>
            <button onClick={() => {
                addPoll(input.value, getSelectedCategory);
                input.value = '';
            }}>Ask
            </button>
            {messages()}
        </div>
    );
};

const mapStateToAddPollProps = (state) => {
    return {
        request: {
            isAdding: polls.getIsAdding(state.polls),
            errorMessage: polls.getAddErrorMessage(state.polls),
            invalidData: polls.getAddInvalidData(state.polls)
        },
        getSelectedCategory: polls.getSelectedCategory(state.polls)
    };
};

AddPoll = connect(mapStateToAddPollProps, actions)(AddPoll);

export default AddPoll;

