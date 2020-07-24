import { userService } from '../services/user_service'
import { userConstants } from './../constants/userconstant'
// import { useHistory } from 'react-router-dom';
// const history = useHistory()

export const userActions = {
    login,
    register
};




function login(username, password) {
    return (dispatch) => {
        userService.login(username, password)
            .then(
                user => {
                    dispatch(success(user));
                    // history.push('/');
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };


    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function register(username, password, email, phonenumber, location) {
    return (dispatch) => {
        userService.login(username, password, email, phonenumber, location)
            .then(
                user => {
                    dispatch(success(user));
                    // history.push('/');
                },
                error => {
                    dispatch(failure(error));

                }
            );
    };


    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}