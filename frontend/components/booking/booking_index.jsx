import React from 'react';
import { Link } from 'react-router';
import StarRating from '../star_rating';
import { isEmpty } from 'lodash';
import moment from 'moment';

class BookingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestBookings();
  }

  render() {
    return (
      <div className="booking-page">
        <h1>Trips</h1>
        <ul>
          {this.props.bookings.map((booking) => {
            return <BookingIndexItem key={booking.id} booking={booking} />
          })}
        </ul>
      </div>
    );
  }
}

const BookingIndexItem = ({ booking }) => {
  let review_option;
  if (!booking.review || isEmpty(booking.review)) {
    review_option = (
      <div className="review-option">
        <StarRating stars={0} />
        <hr />
        <Link to={`/bookings/${booking.id}/review`}>Write Review</Link>
      </div>
    );
  } else {
    review_option = (
      <div className="review-option">
        <StarRating stars={booking.review.rating} />
        <hr />
        <Link to={`/bookings/${booking.id}/review`}>Read Review</Link>
      </div>
    );
  }

  return (
    <li className="booking-card">
      <img src={booking.spot_image_url} />
      <div className="non-photo">
        <Link to={`/spots/${booking.spot_id}`}><h1>{booking.spot_title}</h1></Link>
        <div className="booking-dates">
          <span>{moment(booking.start_date).format("MMM D")}</span>
          -
          <span>{moment(booking.end_date).format("MMM D, YYYY")}</span>
          &nbsp;·&nbsp;
          <span>{booking.guest_count} Coders</span>
        </div>
        {review_option}
      </div>
    </li>
  );
};

export default BookingIndex;
