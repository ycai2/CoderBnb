import React from 'react';
import { isEmpty } from 'lodash';
import StarRating from 'react-star-rating';

class BookingShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.booking || isEmpty(this.props.bookingId)) {
      this.props.requestBooking(this.props.bookingId);
    }
  }

  render() {
    const { bookingId, booking, currentUser, createReview } = this.props;
    return (
      <div>
        <h1>{bookingId}</h1>
        <WriteReview
          bookingId={bookingId}
          booking={booking}
          currentUser={currentUser}
          createReview={createReview}
        />
      </div>
    );
  }
}

class WriteReview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      cleanliness: 0,
      quietness: 0,
      communication: 0,
      overall: 0
    };

    this.updateBody = this.updateBody.bind(this);
    this.updateRating = this.updateRating.bind(this);
  }

  updateBody(e) {
    e.preventDefault();
    this.setState({
      body: e.currentTarget.value
    });
  }

  updateRating(e, result) {
    e.preventDefault();
    this.setState({
      [result.name]: result.rating
    });
  }

  render() {
    return (
      <div className="review-form">
        <h1>{this.props.currentUser.firstName}, how was your stay at {this.props.booking.spot_title}</h1>
        <hr />
        <h2>Comment</h2>
        <textarea onChange={this.updateBody} value={this.state.body}></textarea>
        <div className="ratings">
          <StarRating
            name="cleanliness"
            rating={this.state.cleanliness}
            onRatingClick={this.updateRating}
          />
          <StarRating
            name="quietness"
            rating={this.state.quietness}
            onRatingClick={this.updateRating}
          />
          <StarRating
            name="communication"
            rating={this.state.communication}
            onRatingClick={this.updateRating}
          />
          <StarRating
            name="overall"
            rating={this.state.overall}
            onRatingClick={this.updateRating}
          />
        </div>
      </div>
    );
  }
};

const ReadReview = ({ bookingId, booking, currentUser }) => {
  return (
    <h1>{currentUser.firstName}, your stay at {booking.spot_title}</h1>
  );
};

export default BookingShow;
