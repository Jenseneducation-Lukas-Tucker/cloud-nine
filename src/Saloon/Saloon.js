import React from 'react';
import {Link} from 'react-router-dom';

import './Saloon.css';
import StarRating from '../StarRating/StarRating.js';

const Saloon = ( props ) => {
    return (
        <div>
        <Link to= {'/' + props.key}>
        <div className="Saloon">
            <p onClick={props.click}>Welcome to {props.name}</p>
    <p>Price: {props.price}</p>
            <p>{props.location}</p>
        </div>
        </Link>
        <div>
                <StarRating value={props.rating}/> <span>(32)</span>
                </div>
        </div>
    )
};

export default Saloon;