import { Avatar } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './Body.css';
import firebase from 'firebase';
import { Link, useHistory } from 'react-router-dom';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import {auth, db}  from '../../../firebase';
import Post from '../../../components/Post';

function Body() {
    const user = firebase.auth().currentUser;

    //states
    const [posts, setPosts] = useState([]);

    //useHistory init
    const history = useHistory();

    function redirectToSubmit(e) {
        e.preventDefault();
        history.push('/submit');
    }

    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot => setPosts(
            snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data(),
            }))
        ))
    }, [])

    function redirectToUser(e) {
        e.preventDefault();
        history.push('/user');
    };

    function redirectToLogin(e) {
        e.preventDefault();
        history.push('/login');
    }

    return (
        <div className='body'>
            <div className='bodyPostSender'>
                {user !== null ? <Avatar src={user.photoURL} style={{marginLeft: 7}} className='postSenderAvatar' onClick={redirectToUser} /> : <Avatar onClick={redirectToLogin} style={{marginLeft: 7}} className='postSenderNoAvatar' />}
                <input type='text' placeholder='  Create Post' onClick={redirectToSubmit} />   
                <PhotoLibraryIcon />     
            </div>
            <div className='posts'>
                {
                    posts.map(({id, data}) => (
                        <Post profilePic={data.profilePic} />
                    ))
                }
            </div>
        </div>
    )
}

export default Body;
