import React from 'react';
import './makeyourowndicepromo.scss';




export default () => (
    <>
        <div className="makeyourowndicepromo__pictures">
            {/* <img src={dice} className="makeyourowndicepromo__img--1" /> */}
           
        </div>
        <div className="makeyourowndicepromo__content">
            <h3 className="heading-3 mb-sm">happy Customers</h3>
            <h2 className="heading-2 heading-2--light mb-md">&ldquo;The best dice of our lives&rdquo;</h2>
            <p className="makeyourowndicepromo__text">
                Find a catalogue of set of dice you would like for your next adventure, or try to make one of your own, you can come up with different ideas!
            </p>
            <button className="btn">Find your own custom dice set</button>
        </div>
    </>
);