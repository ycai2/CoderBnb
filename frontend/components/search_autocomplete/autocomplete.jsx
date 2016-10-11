import React from 'react';

class Autocomplete extends React.Component {
  constructor(props) {
    super(props);
    this.searchLocation = this.searchLocation.bind(this);
  }

  componentDidMount() {
    const autocompleteDOMNode = this.refs.autocomplete;
    this.autocomplete = new google.maps.places.Autocomplete(
      autocompleteDOMNode,
      {types: ['geocode']}
    );
    this.autocomplete.addListener('place_changed', this.searchLocation);

  }

  searchLocation() {
    if (this.autocomplete.getPlace().geometry) {
      const location = this.autocomplete.getPlace().geometry.location;
      const lat = location.lat();
      const lng = location.lng();
      if (this.props.callback) {
        this.props.callback(this.autocomplete.getPlace());
      } else {
        this.props.updateLocation({lat, lng});
      }
    }
  }

  render() {
    return (<input
      ref="autocomplete"
      className={this.props.className}
      placeholder="Where to?"
    />);
  }
}

export default Autocomplete;
