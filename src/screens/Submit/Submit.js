import React from 'react';
import { requireAuth } from '../../requireAuth';
import Header from '../Home/components/Header';
import Body from './components/Body';
import './Submit.css';

function Submit() {
    return (
        <div className='submit' style={{height: '100%',display: 'flex', flexDirection: 'column', background: 'black'}}>
            {/*It will have the same header as the home page!!!!!*/}
            <Header />
            <Body />
        </div>
    )
}

export default Submit;
