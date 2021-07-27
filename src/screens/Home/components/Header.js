import React, { useState } from 'react';
import './Header.css';

function Header() {
    const [search, setSearch] = useState('');

    return (
        <div className='header'>
            <div className='headerLeft'>
                <h1>Crash</h1>
            </div>
            <div className='headerMiddle'>
                <form className='headerMiddleForm'>
                    <input type='text' placeholder='Search Crash' value={search} onChange={e => setSearch(e.target.value)}  />
                </form>
            </div>
        </div>
    )
}

export default Header;
