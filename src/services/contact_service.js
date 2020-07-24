import { authHeader } from '../helpers/auth-header';
import axios from 'axios';
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
        url: 'http://localhost:4545/api/call/allcontact',
    })

}
function addcontact(user) {

    return axios({
        method: 'post',
        url: 'http://localhost:4545/api/call/createcontact',
        data: user
    })

}


function updatecontact(payload,id) {

    return axios({
        method: 'put',
        url: `http://localhost:4545/api/call/updatecontact/${id}`,
        data: payload
    })

}

function deletecontacts(user) {

    console.log("delete",user)
    return axios({
        method: 'delete',
        url: `http://localhost:4545/api/call/deleteContact/${user._id}`
    })

}

function callcount(user) {

    return axios({
        method: 'post',
        url: 'http://localhost:4545/api/call/callHistory',
        data: user
    })

}