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
        <select>
          {this.countryList.map((country, idx) => (
            <option value={country} key={idx}>{country}</option>
          ))}
        </select>
      </form>
    );
  }
}

export default SpotForm;
