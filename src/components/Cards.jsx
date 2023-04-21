import React from 'react';
import Card from "./Card";
import '../styles/Cards.css'

const Cards = ({size, ...props}) => {


    return (
        <div className={`cards size${size}`}>
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
