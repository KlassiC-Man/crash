import { Avatar } from '@material-ui/core';
import React from 'react';

function Post({id, user, image, community, message, profilePic, timestamp}) {
    return (
        <div className='post'>
            <div className='postTop'>
                <Avatar src={profilePic} />
                <h5>{user}</h5>
                <h6>{timestamp}</h6>
            </div>
            <div className='postBody'>
                <h5>Posted By {user} in {community}</h5>
                <p>{message}</p>
                <img src={image} />
            </div>
        </div>
    )
}

export default Post;
