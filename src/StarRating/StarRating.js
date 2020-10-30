import React, {useState} from 'react';
import { FaStar } from 'react-icons/fa';
import "./StarRating.css"

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
    <div className="StarRating">
        {[...Array(5)].map((star, i) => {
            const ratingValue = i + 1;

            return(
            <label>
                <input 
                    type="radio" 
                    name="rating" 
                    value={ratingValue} 
                    onClick={() => setRating(ratingValue)}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                    />
             <FaStar 
                color={ratingValue <= (hover || rating) ? "£ffc107" : "#e4e5e9"}
                size={20} 
                className="star"/>
            </label>
            );
        })}
        </div>
    );
}

export default StarRating