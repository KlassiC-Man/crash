import React from 'react';
import Body from './components/Body';
import Header from './components/Header';

function Home() {
    return (
        <div style={{height: '100%', flexDirection: 'column', backgroundColor: 'black'}}>
            <Header style={{flex: 0.20}} />
            <Body style={{flex: 1}} />
        </div>
    )
}

export default Home
