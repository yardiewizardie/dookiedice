import React from 'react';
import './features.scss';

import dice from '../../static/icons/dice.svg';
import bard from '../../static/icons/bardicon.svg';
import cleric from '../../static/icons/clericicon.svg';
import druid from '../../static/icons/druidicon.svg';
import fighter from '../../static/icons/fightericon.svg';
import wizard from '../../static/icons/wizardicon.svg';

export default () => (
    <section className="features">
        <div className="feature">
            <img src={dice} className="feature__icon" />
            <h4 className="feature__title">World's Famous dice</h4>
            <div className="talk-bubble tri-right round left-in">
                <div className="talktext">
                    <p className="feature__text">Join the handcrafted </p>
                </div>
            </div>
        </div>
        <div className="feature"> <div className="feature">
           <img src={bard} className="feature__icon" />
            <h4 className="feature__title">Homebrew Made</h4>
            <div className="talk-bubble tri-right round left-in">
                <div className="talktext">
            <p className="feature__text">Made with passion and alot of stuff that I have placeholder </p>
            </div>
            </div>
        </div></div>
        <div className="feature"> <div className="feature">
           <img src={cleric} className="feature__icon" />
            <h4 className="feature__title">Tailorcrafted Bag</h4>
            <div className="talk-bubble tri-right round left-in">
                <div className="talktext">
            <p className="feature__text">All set of dices come with a special tailorcrafted bag, made by the great dookie</p>
            </div>
            </div>
        </div></div>
        <div className="feature"> <div className="feature">
           <img src={druid} className="feature__icon" />
            <h4 className="feature__title">Colorful & Resillences</h4>
            <div className="talk-bubble tri-right round left-in">
                <div className="talktext">
            <p className="feature__text">You can pick from quite variations of sets, make your choice!</p>
            </div></div>
        </div></div>
        <div className="feature"> <div className="feature">
           <img src={wizard} className="feature__icon" />
            <h4 className="feature__title">Plastic Made</h4>
            <div className="talk-bubble tri-right round left-in">
                <div className="talktext">
            <p className="feature__text">Our dices are made with the best quality of POXICA you can find</p>
        </div></div>
        </div></div>
        <div className="feature"> <div className="feature">
           <img src={fighter} className="feature__icon" />
            <h4 className="feature__title">Lawful Good Dwarf</h4>
            <div className="talk-bubble tri-right round left-in">
                <div className="talktext">
            <p className="feature__text">Mama Berissa is a lawful good dwarf priest who has helped alot of people</p>
            </div></div>
        </div></div>
    </section>
);