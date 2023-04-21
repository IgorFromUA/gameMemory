import React from 'react';
import '../styles/Card.css'

function Card({click, ...props}) {
    const handleClickCard = () => {
        click(props)
    };

    return (
        <div className={`card ${props.isFlipped ? 'flipped' : ''}`} onClick={handleClickCard}>
            <div className="card-front"></div>
            <div className="card-back">{props.value}</div>
        </div>
    );
}


export default Card;
