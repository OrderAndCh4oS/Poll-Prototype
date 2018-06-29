/* eslint-disable no-unused-vars */

const baseURL = 'http://localhost:8000';
export const fetchToken = (username, password) => {
    return fetch(baseURL + '/api-token-auth/', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({username: username, password: password})
    });
};
export const fetchPolls = (category) => {
    console.log(category);
    const endpoint = category === 'all' ? '/' : '?category=' + category;
    return fetch(baseURL + '/questions' + endpoint);
};

export const postPoll = (questionText, category) => {
    return fetch(baseURL + '/questions/', {
        method: 'post',
        body: JSON.stringify({questionText, category})
    });
};

export const postVote = (pollId, vote) => {
    return fetch(baseURL + '/vote', {
        method: 'post',
        body: JSON.stringify({id: pollId, vote})
    });
};