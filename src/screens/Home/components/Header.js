import React, { useState } from 'react';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { IconButton } from '@material-ui/core';
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';
import './Header.css';
import { Avatar } from '@material-ui/core';
import firebase from 'firebase';
import {auth, db} from '../../../firebase';
import { Redirect } from 'react-router';
import { Link } from 'react-router-dom';

function Header() {
    const [search, setSearch] = useState('');

    // the current user
    const user = firebase.auth().currentUser;

    return (
        <div className='header'>
            <div className='headerLeft'>
                <h1>crash</h1>
            </div>
            <div className='headerMiddle'>
                <input type='text' placeholder='Search crash' value={search} onChange={e => setSearch(e.target.value)}  />    
            </div>
            <div className='headerRight'> 
                <ChatOutlinedIcon style={{marginLeft: 10}} />        
                <NotificationsNoneOutlinedIcon />
                <AddOutlinedIcon />
            </div>
            {
                user !== null ? (
                    <div className='headerProfile'>
                        <Avatar src={user.photoURL} />
                        <h4>Darth Vader</h4>
                        <ArrowDropDownCircleOutlinedIcon />
                    </div>
                ) : (
                    <div className='profileDoesntExist'>
                        <Link to='/login'>
                            <button className='login'>Login</button>
                        </Link>
                        <button className='signUp'>Sign Up</button>
                    </div>
                )
            }
        </div>
    )
}

export default Header;
