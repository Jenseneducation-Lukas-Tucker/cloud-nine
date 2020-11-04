import React from 'react';
import HeaderPic from '../assets/10731CFB-6801-4BA0-934D-F170BEDA6733.png'
import HeartIcon from '../assets/HeartIcon.svg'
import './Hair.css'
import StarRating from '../StarRating/StarRating'

const Hair = ( props ) => {
        return ( 
        <div className="Hair">
            <header>
            <div>
                <img src={HeaderPic} alt="saloonpic"></img>
                <span className="Heart"><img src={HeartIcon} alt="heartpic"></img></span>
            </div>
            <div className="ratingContainer">
            <StarRating/> <span>(32)</span>
            </div>
        <h4>{props.name}</h4>
            </header>
        </div>
         );
    }

export default Hair;