import { Avatar } from '@material-ui/core';
import React from 'react';
import './Body.css';
import firebase from 'firebase';
import { Link, useHistory } from 'react-router-dom';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';

function Body() {
    const user = firebase.auth().currentUser;

    //useHistory init
    const history = useHistory();

    function redirectToSubmit(e) {
        e.preventDefault();
        history.push('/submit');
    }

    return (
        <div className='body'>
            <div className='bodyPostSender'>
                {user !== null ? <Avatar src={user.photoURL} style={{marginLeft: 7}} /> : <Avatar style={{marginLeft: 7}} />}
                <input type='text' placeholder='  Create Post' onClick={redirectToSubmit} />   
                <PhotoLibraryIcon />     
            </div>
        </div>
    )
}

export default Body;
