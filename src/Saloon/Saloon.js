import React from 'react';

import './Saloon.css';

const Saloon = ( props ) => {
    return (
        <div className="Saloon">
            <p onClick={props.click}>Welcome to {props.name}</p>
    <p>Price: {props.price}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default Saloon;