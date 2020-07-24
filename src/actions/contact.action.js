import { contactService } from '../services/contact_service'
import { userConstants } from '../constants/userconstant'
import { history } from '../helpers/history';



function totalcontact(payload) {
    return function (dispatch) {
        contactService.totalcontact(payload)
            .then(
                user => {
                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };


    function success(user) { return { type: userConstants.TOTAL_CONTACT_SUCCESS, user } }
    function failure(error) { return { type: userConstants.TOTAL_CONTACT_FAILURE, error } }
}


function addcontact(payload) {
    return function (dispatch) {
        contactService.addcontact(payload)
            .then(
                user => {
                    dispatch(success(user));
                    totalcontact()

                    // history.push('/dashboard');
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };


    function success(user) { return { type: userConstants.ADD_CONTACT_SUCCESS, user } }
    function failure(error) { return { type: userConstants.ADD_CONTACT_FAILURE, error } }
}


function updatecontact(payload,id) {
    return function (dispatch) {
        contactService.updatecontact(payload,id)
            .then(
                user => {

                    dispatch(success(user));
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };


    function success(user) { return { type: userConstants.UPDATE_CONTACT_SUCCESS, user } }
    function failure(error) { return { type: userConstants.UPDATE_CONTACT_FAILURE, error } }
}

function deletecontact(payload) {
   
    return function (dispatch) {
        contactService.deletecontacts(payload)
            .then(
                user => {
                   
                    dispatch(success(user));
                    totalcontact()

                    // history.push('/dashboard');
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };


    function success(user) { return { type: userConstants.DELETE_CONTACT_SUCCESS, user } }
    function failure(error) { return { type: userConstants.DELETE_CONTACT_FAILURE, error } }
}

function callCount(payload) {
    return function (dispatch) {
        contactService.callcount(payload)
            .then(
                user => {
                  
                    dispatch(success(user));
                    history.push('/dashboard');
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };


    function success(user) { return { type: userConstants.CALL_COUNT_SUCCESS, user } }
    function failure(error) { return { type: userConstants.CALL_COUNT_FAILURE, error } }
}


export const contactActions = {
    totalcontact,
    addcontact,
    updatecontact,
    deletecontact,
    callCount
};