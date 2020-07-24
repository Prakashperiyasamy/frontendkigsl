import React, { useState } from 'react';
import useFormFields from './../customHooks/inputcustomHooks.js';
import Loader from './Loader';
import validate from '../customHooks/LoginFormvalidation';
import { useHistory } from 'react-router-dom';

const Register = () => {
    const history = useHistory();

    const [fields, handleFieldChange] = useFormFields({
        email: "",
        password: "",
        username: "",
        location: "",
        phonenumber: ""
    });
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});
    async function handleSubmit(event) {
        event.preventDefault();

        setIsLoading(true);
        setErrors(validate(fields));
        try {

            console.log(fields)

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
                                <label>UserName</label>
                                <div class="inputgroup">
                                    <input type="text"
                                        placeholder="Enter the username"
                                        name="username"
                                        value={fields.username}
                                        onChange={handleFieldChange}
                                    />
                                    <i class="fa fa-user" aria-hidden="true"></i>
                                    <span style={{ color: "red" }}>{errors.username}</span>
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
                        </div> <div class="login-col-12">
                            <div class="form-group">
                                <label>Location</label>
                                <div class="inputgroup">
                                    <input type="text"
                                        placeholder="Enter the Location"
                                        name="location"
                                        value={fields.location}
                                        onChange={handleFieldChange}
                                    />
                                    <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                                    <span style={{ color: "red" }}>{errors.location}</span>
                                </div>
                            </div>
                        </div>
                        <div class="login-col-12">
                            <div class="form-group">
                                <label>Phone-Number</label>
                                <div class="inputgroup">
                                    <input type="number"
                                        name="phonenumber"
                                        placeholder="Enter the phonenumber"
                                        value={fields.phonenumber}
                                        onChange={handleFieldChange}
                                    />
                                    <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                                    <span style={{ color: "red" }}>{errors.phonenumber}</span>
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