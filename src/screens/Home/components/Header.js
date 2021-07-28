import React, { useState } from 'react';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import { IconButton } from '@material-ui/core';
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';
import './Header.css';
import { Avatar } from '@material-ui/core';

function Header() {
    const [search, setSearch] = useState('');

    return (
        <div className='header'>
            <div className='headerLeft'>
                <h1>crash</h1>
            </div>
            <div className='headerMiddle'>
                <form className='headerMiddleForm'>
                    <input type='text' placeholder='Search crash' value={search} onChange={e => setSearch(e.target.value)}  />
                </form>
            </div>
            <div className='headerRight'> 
                <ChatOutlinedIcon style={{marginLeft: 10}} />        
                <NotificationsNoneOutlinedIcon />
                <AddOutlinedIcon />
            </div>
            <div className='headerProfile'>
                <Avatar src={'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.sMRzxqyo6BQD4CE5VPaEMgHaE7%26pid%3DApi&f=1'} />
                <h4>Darth Vader</h4>
                <ArrowDropDownCircleOutlinedIcon />
            </div>
        </div>
    )
}

export default Header;
