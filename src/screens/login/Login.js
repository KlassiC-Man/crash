import React from 'react';
import './Login.css';
import IconButton from '@material-ui/core/IconButton'

function Login() {
    return (
        <div>  
            <div className="Header">
                <h1>crash</h1>
            </div>
            <div className="login-form">
                <div className="login-form-container">
                    <div className="login-form-title">
                        <h1>Login</h1>
                    </div>
                    <div className="login-form-input">
                        <input type="text" className="login-form-input-field" placeholder="Username" />
                        <br></br>
                        <input type="password" className="login-form-input-field" placeholder="Password" />

                    </div>
                    <div className="login-form-button">
                        <button className="login-form-button-field">Login</button> {/* add redirect to home */}    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
