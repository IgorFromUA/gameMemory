import React from 'react';
import '../styles/ControlPanel.css'

const ControlPanel = ({onChange, value, moves}) => {

    const clickStart = () => {
    }
    return (
        <div className='control-panel'>
            <button
                className='start-res'
                onClick={clickStart}
            >start game
            </button>
            <div className='display'>
                <div>Time:</div>
                <div>Moves: {moves}</div>
            </div>
            <select
                className='selectSize'
                value={value}
                onChange={event => onChange(event.target.value)}
            >
                <option value='4'>2*2</option>
                <option value='16'>4*4</option>
                <option value='36'>6*6</option>
            </select>
        </div>
    );
};

export default ControlPanel;
