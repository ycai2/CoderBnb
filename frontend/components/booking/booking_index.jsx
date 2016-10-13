import React from 'react';
import { Link } from 'react-router';

class BookingIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestBookings();
  }

  render() {
    return (
      <div>
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
  return (
    <li>
      <h1>{booking.start_date}</h1>
      <h1>{booking.end_date}</h1>
      <Link to={`/spots/${booking.spot_id}`}>{booking.spot_title}</Link>
      <h1>{booking.guest_count}</h1>
    </li>
  );
};

export default BookingIndex;
