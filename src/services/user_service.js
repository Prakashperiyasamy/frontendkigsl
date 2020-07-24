import { authHeader } from '../helpers/auth-header';
import axios from 'axios';
export const userService = {
    login,
    register
};

function login(username, password) {
    console.log(username,password)
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return axios.post(`http://localhost:4545/api/auth`, requestOptions)
        // .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}


function register(user) {
    console.log(user,"00000000000")
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`/users/register`, requestOptions).then(handleResponse =>handleResponse);
}
