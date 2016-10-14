import React from 'react';
import { isEmpty } from 'lodash';
import StarRating from '../star_rating';
import { SingleDatePicker } from 'react-dates';

class SpotShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      start_date: null,
      end_date: null,
      startFocused: false,
      endFocused: false,
      guest_count: 1,
      totalPrice: 0,
      dayDifference: 0,
    }

    this.onStartDateChange = this.onStartDateChange.bind(this);
    this.onEndDateChange = this.onEndDateChange.bind(this);
    this.onStartFocusChange = this.onStartFocusChange.bind(this);
    this.onEndFocusChange = this.onEndFocusChange.bind(this);
    this.updateSelect = this.updateSelect.bind(this);
    this.createBooking = this.createBooking.bind(this);
  }

  onStartDateChange(date) {
    this.setState({start_date: date});
    if (this.state.end_date) {
      let dayDiff = this.state.end_date.diff(date, 'days');
      this.setState({
        dayDifference: dayDiff,
        totalPrice: dayDiff * this.props.spot.price
      });
    }
  }

  onEndDateChange(date) {
    this.setState({
      end_date: date
    });
    if (this.state.start_date) {
      let dayDiff = date.diff(this.state.start_date, 'days')
      this.setState({
        dayDifference: dayDiff,
        totalPrice: dayDiff * this.props.spot.price
      });
    }
  }

  onStartFocusChange({focused}) {
    this.setState({startFocused: focused});
  }

  onEndFocusChange({focused}) {
    this.setState({endFocused: focused});
  }

  updateSelect(e) {
    e.preventDefault();
    this.setState({
      guest_count: e.currentTarget.value
    });
  }

  createBooking(e) {
    e.preventDefault();
    if (!this.state.start_date || !this.state.end_date) {
      toastr.error("Please enter your stay dates!", "Error");
    } else {
      const newBooking = {
        start_date: this.state.start_date.toString(),
        end_date: this.state.end_date.toString(),
        guest_count: this.state.guest_count,
        spot_id: this.props.spot.id,
      };
      this.props.createBooking(newBooking);
    }
  }

  componentDidMount() {
    if (!this.props.spot || isEmpty(this.props.spot)) {
      this.props.requestSpot(this.props.spotId);
    }
  }

  render() {

    return (
      <div className="spot-show-page">
        <header>
          <img src={this.props.spot.image_url} />
          <div className="header-info">
            <h1>{this.props.spot.title}</h1>
            <div className="rating-info">
              <span><StarRating stars={this.props.spot.rating} /></span>
              <span>{this.props.spot.review_count}review(s)</span>
            </div>

            <div className="room-info">
              <div>
                <RoomTypeIcon type={this.props.spot.room_type} />
                <span>{this.props.spot.room_type}</span>
              </div>
              <div>
                <i className="fa fa-users" aria-hidden="true"></i>
                <span>{this.props.spot.guest_count} coder(s)</span>
              </div>
            </div>
          </div>
        </header>
        <div className="spot-show-body">
          <div className="booking-request">
            <div className="request-price">
              <span>${this.props.spot.price}</span>
              <span className="per-night">Per Night</span>
            </div>
            <div className="request-wrapper">
              <div className="request-dates">
                <SingleDatePicker
                  {...this.props}
                  id="request_start_date"
                  date={this.state.start_date}
                  focused={this.state.startFocused}
                  onDateChange={this.onStartDateChange}
                  onFocusChange={this.onStartFocusChange}
                  numberOfMonths={1}
                />
                <SingleDatePicker
                  {...this.props}
                  id="request_end_date"
                  className="request_end_date"
                  date={this.state.end_date}
                  focused={this.state.endFocused}
                  onDateChange={this.onEndDateChange}
                  onFocusChange={this.onEndFocusChange}
                  numberOfMonths={1}
                />
                <select selected={this.state.guest_count} onChange={this.updateSelect}>
                  <option value={1}>1 Coder</option>
                  <option value={2}>2 Coders</option>
                  <option value={3}>3 Coders</option>
                  <option value={4}>4 Coders</option>
                </select>
              </div>
              <div className="price-detail">
                <div>
                  <span>${this.props.spot.price} x {this.state.dayDifference}</span>
                  <span>${this.state.totalPrice}</span>
                </div>
                <hr />
                <button onClick={this.createBooking}>Request to Book</button>
              </div>
            </div>
          </div>
          <div className="spot-show-reviews">
            <ul>
              {this.props.reviews.map((review) => {
                return (
                  <li key={review.id}>
                    <h1>{review.user}</h1>
                    <div className="review-detail">
                      <p>{review.body}</p>
                      <StarRating stars={review.rating} />
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const RoomTypeIcon = ({ type }) => {
  let className = "fa ";
  if (type === "basement") {
    className += "fa-server";
  } else if (type === "lab") {
    className += "fa-laptop";
  } else if (type === "penthouse") {
    className += "fa-rocket";
  }

  return (
    <i className={className} aria-hidden="true"></i>
  );
};

export default SpotShow;
