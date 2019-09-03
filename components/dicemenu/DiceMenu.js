import React from 'react';
import './dicemenu.scss';
import Dicecard from '../dicecard';
import dice1 from '../../static/firstdice.jpg';
import dice2 from '../../static/seconddice.png';

export default () => (
    <section className="dicemenu">
        <Dicecard img={dice1} name="Metalic Dwarven Dice" type="metal" price="$50.00" liked />
        <Dicecard img={dice2} name="Purple white Dice" type="Plastic" price="$10.00" liked={false} />
        <Dicecard img={dice2} name="Purple white Dice" type="Plastic" price="$10.00" liked={false} />    
        <Dicecard img={dice2} name="Purple white Dice" type="Plastic" price="$10.00" liked={false} />
        <Dicecard img={dice2} name="Purple white Dice" type="Plastic" price="$10.00" liked={false} />
        <Dicecard img={dice2} name="Purple white Dice" type="Plastic" price="$10.00" liked={false} />
    </section>
);