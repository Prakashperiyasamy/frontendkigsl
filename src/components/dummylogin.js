import React from 'react';

function Dummylogin ()
{
    return( <div class="login-wrapper">
    <div class="login-box">
        <h1>Login</h1>
        <form>
            <div class="login-row">
                <div class="login-col-12">
                    <div class="form-group">
                        <label>UserName</label>
                        <div class="inputgroup">
                            <input type="text" placeholder="Enter the UserName" />
                            <i class="fa fa-user" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div class="login-col-12">
                    <div class="form-group">
                        <label>Password</label>
                        <div class="inputgroup">
                            <input type="text" placeholder="Enter the Password" />
                            <i class="fa fa-unlock-alt" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
                <div class="login-col-12">
                    <div class="form-group">
                        <div class="btn-group">
                            <button type="button" class="registerbttn regbtn">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
</div>
)
}

export default Dummylogin