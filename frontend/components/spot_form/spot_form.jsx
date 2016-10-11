import React from 'react';
import { Link } from 'react-router';
import AutocompleteContainer from '../search_autocomplete/autocomplete_container';

class SpotForm extends React.Component {
  constructor(props) {
    super(props);
    this.countryList = countryList;
    this.state = {
      city: "",
      state: "",
      zipcode: "",
      lat: 40.7250239,
      lng: -73.996792,
    }
    this.fillForm = this.fillForm.bind(this);
    this.createSpot = this.createSpot.bind(this);
  }

  componentDidMount() {
    const mapDOMNode = this.refs.map;
    const center = {lat: this.state.lat, lng: this.state.lng};
    const mapOptions = {center, zoom: 13};

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
  }

  componentDidUpdate() {
    this.map.setCenter({lat: this.state.lat, lng: this.state.lng})
  }

  fillForm(location) {
    location.address_components.forEach((component) => {
      if (component.types.includes("locality")) {
        this.setState({city: component.long_name});
      }
      if (component.types.includes("administrative_area_level_1")) {
        this.setState({state: component.short_name});
      }
      if (component.types.includes("postal_code")) {
        this.setState({zipcode: component.long_name});
      }
    })
    this.setState({
      lat: parseFloat(location.geometry.location.lat()),
      lng: parseFloat(location.geometry.location.lng())
    });
  }

  updateField(field) {
    return (e) => this.setState({
			[field]: e.currentTarget.value
		});
  }

  createSpot() {

  }

  render() {
    return (
      <form action="/spots/new" method="POST" className="new-spot-form-info">
        <h1>Where's your place located?</h1>

        <label htmlFor="street">Street Address</label>
        <AutocompleteContainer id="street" callback={this.fillForm} />
        <label htmlFor="city">City</label>
        <input id="city" value={this.state.city} onChange={this.updateField('city')} />
        <label htmlFor="state">State</label>
        <input id="state" value={this.state.state} onChange={this.updateField('state')} />
        <label htmlFor="zipcode">ZIP Code</label>
        <input id="zipcode" value={this.state.zipcode} onChange={this.updateField('zipcode')} />

        <label htmlFor="title">Title</label>
        <input id="title" />
        <label htmlFor="description">Description</label>
        <textarea id="description"></textarea>

        <label htmlFor="guest-count">Max Guest Count</label>
        <select id="guest-count">
          <option value="1">1 coder</option>
          <option value="2">2 coders</option>
          <option value="3">3 coders</option>
          <option value="4">4 coders</option>
        </select>
        <p>Caution: Too many coders may cause problems. </p>

        <div id="new-spot-map-container" ref="map">
        </div>
        <hr />
        <div className="button-control">
          <Link to="/">Cancel</Link>
          <button onClick={this.createSpot}>Finish</button>
        </div>
      </form>
    );
  }
}

export default SpotForm;
