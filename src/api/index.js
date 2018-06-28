/* eslint-disable no-unused-vars */
export const fetchIndex = () => {
    return fetch('http://localhost:8000/');
};
export const fetchQuestions = (category) => {
    return fetch('http://localhost:8000/questions/');
};