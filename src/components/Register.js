import React, { useState } from 'react';
import useFormFields from './../customHooks/inputcustomHooks.js';
import Loader from './Loader';
import validate from '../customHooks/LoginFormvalidation';
import { useHistory } from 'react-router-dom';
import { userActions } from './../actions/login.action'
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [fields, handleFieldChange, reset] = useFormFields({
        firstName: "", password: "", email: "", phone_number: "", lastName: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    async function handleSubmit(event) {
        event.preventDefault();
        setErrors(validate(fields));
        try {
            if (Object.keys(errors).length == 0) {
                setIsLoading(true);
                dispatch(userActions.register(
                    fields.firstName,
                    fields.lastName,
                    fields.email,
                    fields.password,
                    fields.phone_number
                ))
                setTimeout(() => {
                    setIsLoading(false);
                    reset()
                }, 2000);
            }

        } catch (e) {

            setIsLoading(false);
        }
    }

    return (
        <div class="login-wrapper">
            <div class="login-box">
                <h1>Login</h1>
                <form onSubmit={handleSubmit}>
                    <div class="login-row">
                        <div class="login-col-12">
                            <div class="form-group">
                                <label>First Name</label>
                                <div class="inputgroup">
                                    <input type="text"
                                        placeholder="Enter the firstName"
                                        name="firstName"
                                        value={fields.firstName}
                                        onChange={handleFieldChange}
                                    />
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                    <span style={{ color: "red" }}>{errors.firstName}</span>
                                </div>
                            </div>
                        </div>
                        <div class="login-col-12">
                            <div class="form-group">
                                <label>Last Name</label>
                                <div class="inputgroup">
                                    <input type="text"
                                        placeholder="Enter the lastName"
                                        name="lastName"
                                        value={fields.lastName}
                                        onChange={handleFieldChange}
                                    />
                                    <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                                    <span style={{ color: "red" }}>{errors.lastName}</span>
                                </div>
                            </div>
                        </div>
                        <div class="login-col-12">
                            <div class="form-group">
                                <label>Email</label>
                                <div class="inputgroup">
                                    <input type="Email"
                                        placeholder="Enter the Email"
                                        name="email"
                                        value={fields.email}
                                        onChange={handleFieldChange}
                                    />
                                    <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                                    <span style={{ color: "red" }}>{errors.email}</span>
                                </div>
                            </div>
                        </div> <div class="login-col-12">
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
                                <label>Phone-Number</label>
                                <div class="inputgroup">
                                    <input type="number"
                                        name="phone_number"
                                        placeholder="Enter the phonenumber"
                                        value={fields.phone_number}
                                        onChange={handleFieldChange}
                                    />
                                    <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                                    <span style={{ color: "red" }}>{errors.phone_number}</span>
                                </div>
                            </div>
                        </div>
                        <div class="login-col-12">
                            <div class="form-group">
                                <div class="btn-group">
                                    <button type="submit" class="registerbttn regbtn">
                                        {!isLoading ? "Submit" : <Loader isLoading={isLoading} />}
                                    </button>
                                    <a href="/">Click here to login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>)
}

export default Register