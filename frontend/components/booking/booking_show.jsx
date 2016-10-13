import React from 'react';
import { isEmpty } from 'lodash';
import StarRating from 'react-star-rating';
import { Link } from 'react-router';
import moment from 'moment';

class BookingShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.booking || isEmpty(this.props.booking)) {
      this.props.requestBooking(this.props.bookingId);
    }
  }

  render() {
    const { bookingId, booking, currentUser, createReview } = this.props;

    let reviewDetail;
    if (!booking.review || isEmpty(booking.review)) {
      reviewDetail = <WriteReview
        bookingId={bookingId}
        booking={booking}
        currentUser={currentUser}
        createReview={createReview}
      />;
    } else {
      reviewDetail = <ReadReview
        bookingId={bookingId}
        booking={booking}
        currentUser={currentUser}
      />;
    }

    return (
      <div>
        {reviewDetail}
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
      overall: 0,
      bookingId: this.props.bookingId
    };

    this.updateBody = this.updateBody.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.submitReview = this.submitReview.bind(this);
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

  submitReview(e) {
    e.preventDefault();
    this.props.createReview(this.state);
  }

  render() {
    return (
      <div className="review-form">
        <h1>{this.props.currentUser.firstName}, how was your stay at {this.props.booking.spot_title}</h1>
        <h3>
          {moment(this.props.booking.start_date).format("MMM DD, YYYY")}
          &nbsp;-&nbsp;
          {moment(this.props.booking.end_date).format("MMM DD, YYYY")}
        </h3>
        <img src={this.props.booking.spot_image_url} />
        <hr />
        <h2>Comment</h2>
        <textarea onChange={this.updateBody} value={this.state.body}></textarea>
        <div className="ratings">
          <StarRating
            name="cleanliness"
            caption="cleanliness"
            rating={this.state.cleanliness}
            onRatingClick={this.updateRating}
          />
          <StarRating
            name="quietness"
            caption="quietness"
            rating={this.state.quietness}
            onRatingClick={this.updateRating}
          />
          <StarRating
            name="communication"
            caption="communication"
            rating={this.state.communication}
            onRatingClick={this.updateRating}
          />
          <StarRating
            name="overall"
            caption="overall"
            rating={this.state.overall}
            onRatingClick={this.updateRating}
          />
        </div>
        <hr />
        <div className="button-control">
          <Link to="/bookings">Back</Link>
          <button onClick={this.submitReview}>Finish</button>
        </div>
      </div>
    );
  }
};

const ReadReview = ({ bookingId, booking, currentUser }) => {
  return (
    <div className="read-review">
      <h1>{currentUser.firstName}, your stay at {booking.spot_title}</h1>
      <h3>
        {moment(booking.start_date).format("MMM DD, YYYY")}
        &nbsp;-&nbsp;
        {moment(booking.end_date).format("MMM DD, YYYY")}
      </h3>
      <img src={booking.spot_image_url} />
      <hr />
      <h2>Comment</h2>
      <p>{booking.review.body}</p>
      <div className="ratings">
        <StarRating
          name="cleanliness"
          caption="cleanliness"
          disabled={true}
          rating={booking.review.cleanliness}
        />
        <StarRating
          name="quietness"
          caption="quietness"
          rating={booking.review.quietness}
        />
        <StarRating
          name="communication"
          caption="communication"
          rating={booking.review.communication}
        />
        <StarRating
          name="overall"
          caption="overall"
          rating={booking.review.overall}
        />
      </div>
    </div>
  );
};

export default BookingShow;
