import React from 'react'
import './Body.css'
import  IconButton  from '@material-ui/core'
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Body() {
    return (
        <div>

            {/* const [Password, setPassword] = useState('');

            <div className="login-form">
                <div className="login-form-input">
                    <input type="text" className="ussername" placeholder="Username" value={password} /> */}
















            {/* <div className="login-form">
                <div className="login-form-stuff">
                    <div className="login-form-title">
                        <h1>Login</h1>
                    </div>
                    <div className="inputForm">
                        <input type="text" className="username" placeholder="Username" />
                        <br></br>
                        <input type="password" className="passwordLogin" placeholder="Password" />
                        <br></br>
                        <input type='password' className='confirm' placeholder='Confirm Password' />
                            {<passwordLogin /> == <confirm /> ?
                                <button className="submit" onClick={<Link to='/'></Link>}>Login</button>
                                : <Popup> <div>Passwords Do Not Match</div> </Popup> }

                        {/* if (login-form-password == login-form-confirm) {
                            <button className="login-form-submit" onClick={<Link to='/'></Link>}>Login</button>
                        } else {
                            <Popup> <div>Passwords Do Not Match</div> </Popup>
                        }; */}

                        
                {/*</div>
                </div>
            </div> */}
        </div>
    )
}

export default Body
