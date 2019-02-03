import config from 'config';
import { authHeader } from '../_helpers';

export const userService = {
    login,
    logout,
    getAllMarket,
    getAllFactory,
    getOneFactory
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`https://code-challenge.quizrr.se/api/auth/signin`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAllMarket() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`https://code-challenge.quizrr.se/api/market`, requestOptions).then(handleResponse);
}

function getAllFactory() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`https://code-challenge.quizrr.se/api/factory`, requestOptions).then(handleResponse);
}

function getOneFactory(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`https://code-challenge.quizrr.se/api/factory/`+id, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}