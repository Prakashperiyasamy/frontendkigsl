import { authHeader } from '../helpers/auth-header';
import axios from 'axios';
import { URL } from './../config'
let token = JSON.parse(localStorage.getItem('user'));
export const contactService = {
    totalcontact,
    addcontact,
    updatecontact,
    deletecontacts,
    callcount
};

function totalcontact() {
    return axios({
        method: 'get',
        url: URL.TOTALCONTACT,
        headers: {
            'x-auth-token': token,
            'Content-Type': 'application/json'
        }
    })

}
function addcontact(user) {

    return axios({
        method: 'post',
        url: URL.CREATECONTACT,
        data: user,
        headers: {
            'x-auth-token': token,
            'Content-Type': 'application/json'
        }
    })

}


function updatecontact(payload, id) {

    return axios({
        method: 'put',
        url: URL.UPDATECONTACT + `/${id}`,
        data: payload,
        headers: {
            'x-auth-token': token,
            'Content-Type': 'application/json'
        }
    })

}

function deletecontacts(user) {

    return axios({
        method: 'delete',
        url: URL.DELETECONTACT + `/${user._id}`,
        headers: {
            'x-auth-token': token,
            'Content-Type': 'application/json'
        }
    })

}

function callcount(user) {

    return axios({
        method: 'post',
        url: URL.CALLCOUNT,
        data: user,
        headers: {
            'x-auth-token': token,
            'Content-Type': 'application/json'
        }
    })

}