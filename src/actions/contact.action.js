import { contactService } from '../services/contact_service'
import { userConstants } from '../constants/userconstant'
import { history } from '../helpers/history';
import { ToastContainer, toast } from 'react-toastify';

let options = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    }

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


function addcontact(payload,auth) {
    return function (dispatch) {
        contactService.addcontact(payload,auth)
            .then(
                user => {

                    dispatch(success(user));
                    dispatch(totalcontact(auth))
                    toast.success(user.data.message,options)
                    // history.push('/dashboard');
                },
                error => {
                    toast.error(error.response.data.errors[0].msg,options );
                    dispatch(totalcontact(auth))
                    dispatch(failure(error));
                }
            );
    };


    function success(user) { return { type: userConstants.ADD_CONTACT_SUCCESS, user } }
    function failure(error) { return { type: userConstants.ADD_CONTACT_FAILURE, error } }
}


function updatecontact(payload,id,auth) {
  
    return function (dispatch) {
        contactService.updatecontact(payload,id,auth)
            .then(
                user => {
                    toast.success(user.data.message,options );
                    dispatch(success(user));
                    dispatch(totalcontact(auth))
                },
                error => {
                    toast.error(error.response.data.errors[0].msg,options );
                    dispatch(totalcontact(auth))
                    dispatch(failure(error));
                }
            );
    };


    function success(user) { return { type: userConstants.UPDATE_CONTACT_SUCCESS, user } }
    function failure(error) { return { type: userConstants.UPDATE_CONTACT_FAILURE, error } }
}

function deletecontact(payload,auth) {

    return function (dispatch) {
        contactService.deletecontacts(payload,auth)
            .then(
                user => {
                    toast.success(user.data.message,options );
                    dispatch(success(user));
                    dispatch(totalcontact(auth))

                    // history.push('/dashboard');
                },
                error => {
                    toast.error(error.response.data.errors[0].msg,options );
                    dispatch(totalcontact(auth))
                    dispatch(failure(error));
                }
            );
    };


    function success(user) { return { type: userConstants.DELETE_CONTACT_SUCCESS, user } }
    function failure(error) { return { type: userConstants.DELETE_CONTACT_FAILURE, error } }
}

function callCount(payload,auth) {
    return function (dispatch) {
        contactService.callcount(payload,auth)
            .then(
                user => {
                  
                    dispatch(success(user));
                    history.push('/dashboard');
                },
                error => {
                    toast.error(error.response.data.errors[0].msg,options );
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