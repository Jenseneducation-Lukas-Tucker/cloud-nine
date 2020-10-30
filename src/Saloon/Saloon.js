import React from 'react';

import './Saloon.css';
import StarRating from '../StarRating/StarRating.js';

const Saloon = ( props ) => {
    return (
        <div className="Saloon" >
            <a href="/moreinfo">more info</a>
            <p onClick={props.click}>Welcome to {props.name}</p>
    <p>Price: {props.price}</p>
        <div>
                <StarRating value={props.rating}/> <span>(32)</span>
                </div>
        
            <p>{props.location}</p>
        </div>
    )
};

export default Saloon;