import React from 'react';
import { isEmpty } from 'lodash';
import StarRating from '../star_rating';

class SpotShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (!this.props.spot || isEmpty(this.props.spot)) {
      console.log("re-retrieving");
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
              <span>{this.props.spot.price}</span>
              <span className="per-night">Per Night</span>
            </div>
            
          </div>
          <div className="spot-show-about">
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
