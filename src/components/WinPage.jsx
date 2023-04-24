import React from 'react';
import '../styles/WinPage.css'

const WinPage = ({moves, time, reset}) => {

    return (
        <div
            onClick={reset}
            className='win-page'
        >
            <h1 className='red'>You WIN!</h1>
            <h2>time  <span className='red'>{time}</span> </h2>
            <h2>moves  <span className='red'>{moves}</span></h2>
            <h2 className='blink'>press to new game</h2>
        </div>
    );
};

export default WinPage;
