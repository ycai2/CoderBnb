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
            <StarRating stars={this.props.spot.rating} />
          </div>
        </header>
        <div className="spot-show-body">
          <div className="booking-request">
          </div>
          <div className="spot-show-about">
          </div>
        </div>
      </div>
    );
  }
}

export default SpotShow;
