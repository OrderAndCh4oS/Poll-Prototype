/* eslint-disable react/prop-types */
import React from 'react';

const FetchError = ({message, onRetry}) => (
    <div>
        <p>Failed to request todos: {message}</p>
        <button onClick={onRetry}>Try again</button>
    </div>
);

export default FetchError;