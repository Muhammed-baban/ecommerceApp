import React, { useState } from "react";
import "./index.css";

interface RatingProps {
  initialValue: number;
  onChange: (rating: number) => void;
  max: number;
}

const Rating: React.FC<RatingProps> = ({ initialValue, onChange, max }) => {
  const [rating, setRating] = useState(initialValue);
  const handleClick = (value: number) => {
    setRating(value);
    onChange(value);
  };

  const stars = [];
  for (let i = 1; i <= max; i++) {
    const className =
      i <= rating ? "styled-rating-star filled" : "styled-rating-star";
    stars.push(
      <span key={i} className={className} onClick={() => handleClick(i)}>
        &#9733;
      </span>
    );
  }

  return <div className="styled-rating">{stars}</div>;
};

export default Rating;
