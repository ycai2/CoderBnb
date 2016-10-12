import React from 'react';

class SpotShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestSpot(this.props.spotId);
  }

  render() {
    return (
      <div className="spot-show-page">
        <header>
          <img src={this.props.image_url} />
        </header>
      </div>
    );
  }
}

export default SpotShow;
