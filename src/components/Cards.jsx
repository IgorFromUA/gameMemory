import React from 'react';
import Card from "./Card";
import '../styles/Cards.css'

const Cards = (props) => {

    return (
        <div className='cards'>
            {props.mixedMus.map((value, index) => {
                return (
                    <Card
                        value={value.value}
                        index={index}
                        key={index + 1}
                        isFlipped={value.isFlipped}
                        isCouple={value.isCouple}
                        click={props.click}
                    />
                )
            })}
        </div>
    );
};

export default Cards;
