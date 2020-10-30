import React from 'react';

import './Saloon.css';
import StarRating from '../StarRating/StarRating.js';

const Saloon = ( props ) => {
    return (
        <div className="Saloon">
            <p onClick={props.click}>Welcome to {props.name}</p>
    <p>Price: {props.price}</p>
                <StarRating value={props.rating}/>
        
            <p>{props.location}</p>
        </div>
    )
};

export default Saloon;