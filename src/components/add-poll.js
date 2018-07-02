import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {addPoll} from '../actions/index';
import CategorySelect from './category-select';

let AddPoll = ({dispatch}) => {
    let input;
    let category = '';

    const handleCategoryChange = (event) => {
        category = event.target.value;
    };

    return (
        <div className={'add-poll'}>
            <h2>Add Poll</h2>
            <label>
                Question: <input ref={node => input = node}/>
            </label>
            <CategorySelect onChange={handleCategoryChange}/>
            <button onClick={() => {
                dispatch(addPoll(input.value, category));
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

