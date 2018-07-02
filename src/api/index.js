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
export const fetchPolls = (category, token) => {
    const endpoint = category === 'all' ? '/' : '?category=' + category;
    return fetch(baseURL + '/questions' + endpoint, {
        headers: {
            'Authorization': 'JWT ' + token
        }
    });
};

export const fetchPoll = (id, token) => {
    return fetch(baseURL + '/questions/' + id + '/', {
        headers: {
            'Authorization': 'JWT ' + token
        }
    });
};

export const postPoll = (questionText, category, token) => {
    return fetch(baseURL + '/questions/', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'JWT ' + token
        },
        body: JSON.stringify({question_text: questionText, category: 'Politics'})
    });
};

export const postVote = (pollId, vote, token) => {
    return fetch(baseURL + '/votes/', {
        method: 'post',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'JWT ' + token
        },
        body: JSON.stringify({question: pollId, choice: vote})
    });
};
