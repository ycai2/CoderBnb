import React from 'react';

const StarRating = ({ stars }) => {
  const starIcons = [];
  for (let i = 0; i < 5; i++) {
    if (stars - i >= 1) {
      starIcons.push((<i key={i} className="fa fa-star" aria-hidden="true"></i>));
    } else if (stars - i > 0) {
      starIcons.push((<i key={i} className="fa fa-star-half-o" aria-hidden="true"></i>));
    } else {
      starIcons.push((<i key={i} className="fa fa-star-o" aria-hidden="true"></i>))
    }
  }

  return (
    <span className="star-rating">
      {starIcons}
    </span>
  );
};

export default StarRating;
