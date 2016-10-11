import React from 'react';
import { countryList } from '../../util/country_list';

class SpotForm extends React.Component {
  constructor(props) {
    super(props);
    this.countryList = countryList;
  }

  render() {
    return (
      <form>
        <h1>Where's your place located?</h1>
        <label htmlFor="country">Country</label>
        <select id="country">
          {this.countryList.map((country, idx) => (
            <option value={country} key={idx}>{country}</option>
          ))}
        </select>

        <label htmlFor="street">Street Address</label>
        <input id="street" />
        <label htmlFor="city">City</label>
        <input id="city" />
        <label htmlFor="state">State</label>
        <input id="state" />
        <label htmlFor="zipcode">ZIP Code</label>
        <input id="zipcode" />

        <label htmlFor="title">Title</label>
        <input id="title" />
        <label htmlFor="description">Description</label>
        <input id="description" />

        <select id="guest-count">
          <option value="1">1 coder</option>
          <option value="2">2 coders</option>
          <option value="3">3 coders</option>
          <option value="4">4 coders</option>
        </select>
        <p>Caution: Too many coders may cause problems. </p>
        <label htmlFor="lat">Latitude</label>
        <input id="lat" />
        <label htmlFor="lng">Longitude</label>
        <input id="lng" />


        <button onClick="createSpot">Finish</button>
      </form>
    );
  }
}

export default SpotForm;
