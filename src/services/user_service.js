import { authHeader } from '../helpers/auth-header';
import axios from 'axios';
export const userService = {
    login,
    register
};

function login(username, password) {

    return  axios({
        method: 'post',
        url: 'http://127.0.0.1:4545/api/auth',
        data: {
            "email":username,
            "password":password
      }
      })
        // .then(handleResponse)
        .then(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem('user', JSON.stringify(user));

            return user;
        });
}


function register(user) {
    console.log(user,"00000000000")
    return  axios({
        method: 'post',
        url: 'http://localhost:4545/api/users',
        data: user
      })
    
}
