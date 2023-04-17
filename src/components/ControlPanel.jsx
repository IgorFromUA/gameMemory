import React from 'react';
import '../styles/ControlPanel.css'

const ControlPanel = () => {
    return (
        <div className='control-panel'>
            <button className='start-res'>start</button>
            <select className='selectSize'>
                <option value='4'>2*2</option>
                <option value='16'>4*4</option>
                <option value='36'>6*6</option>
            </select>
        </div>
    );
};

export default ControlPanel;
