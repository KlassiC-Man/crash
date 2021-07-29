import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import { auth } from '../../../firebase';
import './Body.css';

function Body() {
    const user = auth.currentUser;

    const [title, setTitle] = useState('');

    return (
        <div className='submitBody'>
            <div className='submitBodyTop'>
                <Avatar className='submitBodyTopAvatar' src={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.XcANdtdmW-8NsCuuUYR7rwHaE8%26pid%3DApi&f=1'} />
                <h4>user</h4>
            </div>
            <div className='submitBodyMiddle'>
                <input type='text' placeholder='Title' value={title} onChange={e => setTitle(e.target.value)} />
            </div>
        </div>
    )
}

export default Body;
