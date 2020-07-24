import React, { useState } from "react";
import { useHistory ,withRouter} from 'react-router-dom';

import Loader from './Loader';
import validate from '../customHooks/LoginFormvalidation'
import useFormFields from './../customHooks/inputcustomHooks.js';
import { userActions } from './../actions/login.action'
import { useDispatch, useSelector } from 'react-redux';

const Login = (props) => {
    const history = useHistory();
    const [fields, handleFieldChange] = useFormFields({
        email: "",
        password: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    // const loggingIn = useSelector(state => state.authentication.loggingIn);
    const dispatch = useDispatch();

    async function handleSubmit(event) {
        event.preventDefault();
        // history.push('/dashboard')

        // setIsLoading(true);
        // setErrors(validate(fields));
        try {
           
        // console.log(history,fields)

                dispatch(userActions.login(fields.email, fields.password));
            
            // console.log(fields)

        } catch (e) {

            setIsLoading(false);
        }
    }

    return (<div class="login-wrapper">
        <div class="login-box">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div class="login-row">
                    <div class="login-col-12">
                        <div class="form-group">
                            <label>UserName</label>
                            <div class="inputgroup">
                                <input
                                    type="text"
                                    placeholder="Enter the UserName"
                                    name="email"
                                    value={fields.email}
                                    onChange={handleFieldChange}
                                />
                                <i class="fa fa-user" aria-hidden="true"></i>
                                <span style={{ color: "red" }}>{errors.email}</span>
                            </div>
                        </div>
                    </div>
                    <div class="login-col-12">
                        <div class="form-group">
                            <label>Password</label>
                            <div class="inputgroup">
                                <input type="password"
                                    placeholder="Enter the Password"
                                    name="password"
                                    value={fields.password}
                                    onChange={handleFieldChange}

                                />
                                <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                                <span style={{ color: "red" }}>{errors.password}</span>
                            </div>
                        </div>
                    </div>
                    <div class="login-col-12">
                        <div class="form-group">
                            <div class="btn-group">
                                <button type="submit" class="registerbttn regbtn">
                                    {!isLoading ? "Submit" : <Loader isLoading={isLoading} />}
                                </button>
                                <a href="/register">Create new Account</a>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>)
}

export default withRouter(Login)
