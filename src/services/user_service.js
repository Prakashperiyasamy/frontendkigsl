import { authHeader } from '../helpers/auth-header';
import axios from 'axios';
import { URL } from './../config'
export const userService = {
    login,
    register
};

function login(username, password) {

    return axios({
        method: 'post',
        url: URL.LOGIN,
        data: {
            "email": username,
            "password": password
        }
    })
        // .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user.data.token));
            return user;
        });
}


function register(user) {
    return axios({
        method: 'post',
        url: URL.REGISTER,
        data: user
    })

}
