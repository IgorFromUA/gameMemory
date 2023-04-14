import React, {useState} from 'react';
import '../styles/Card.css'

function Card(props) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);

    };

    return (
        <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
            <div className="card-front"></div>
            <div className="card-back">{props.value}</div>
        </div>
    );
}


export default Card;
