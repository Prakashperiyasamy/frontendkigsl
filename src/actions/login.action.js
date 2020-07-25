import { userService } from '../services/user_service'
import { userConstants } from './../constants/userconstant'
import { history } from '../helpers/history';
// import { useHistory, withRouter } from 'react-router-dom';
// let history = useHistory()
export const userActions = {
    login,
    register
};




function login(username, password) {
    return function( dispatch ) {
        userService.login(username, password)
            .then(
                user => {
                    console.log("user Deatails",user)
                    dispatch(success(user.data.token));
                    // history.push('http://localhost:3000/dashboard');
                },
                error => {
                    dispatch(failure(error));
                }
            );
    };


    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function register(firstName,lastName, email,password, phone_number ) {
 
    return function (dispatch) {
        const payload = {
            firstName,
            lastName,
            email,
            password,
            phone_number
        }

        userService.register(payload)
            .then(
                user => {
                    dispatch(success(user.data.token));
                    // dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error));

                }
            );
    };


    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}