import React from 'react';
import Card from "./Card";
import '../styles/Cards.css'

const Cards = () => {
    const mus = ['❤','❤','♫','♫','☎','☎','♨','♨','✈','✈','✣','✣','■','■','☀','☀']
    const mixedMus = (mus) => {
        const copyMus = [...mus]
        const mixMus= [];
        while (copyMus.length > 0) {
            const randomId = parseInt(Math.random() * copyMus.length)
        mixMus.push(copyMus.splice(randomId, 1))
        }
        return mixMus
    }
    return (
        <div className='cards'>
            {mixedMus(mus).map((value, index)=> <Card value={value}/>)}
        </div>
    );
};

export default Cards;
