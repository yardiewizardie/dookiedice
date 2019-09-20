import React from 'react'
import './dicecard.scss'

export default props => (
    <div className="dicecard">
        <img src={props.img} alt={props.name} className="dicecard__img" />
        {/* <svg className="dicecard__like" /> */}
        <h5 className="dicecard__name">{props.name}</h5>
        <div className="dicecard__type">
            <svg />
            <p>{props.type}</p>
        </div>
        <div className="dicecard__type">
            <svg />
            <p>{props.price}</p>
        </div>
        <button className="dicecard__btn">BUY NOW</button>
    </div>
)

//        {props.liked}