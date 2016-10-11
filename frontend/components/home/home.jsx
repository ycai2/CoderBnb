import React from 'react';
import { hashHistory } from 'react-router';
import { DateRangePicker } from 'react-dates';
import AutocompleteContainer from '../search_autocomplete/autocomplete_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
      startDate: null,
      endDate: null,
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  redirectToSpots(e) {
    e.preventDefault();
    hashHistory.push('/spots');
  }

  render() {
    const { focusedInput, startDate, endDate } = this.state;
    return (
      <div className="home">
        <div className="content">
          <div className="content-header">
            <h1>Code There</h1>
            <h4>Book a spot and code together. Enjoy the hackiness.</h4>
          </div>
          <div className="content-body">
            <h2>Seach over 2 million spots in over 3 countries</h2>
            <form>
              <AutocompleteContainer className="home-location-input" />
              <DateRangePicker
                {...this.props}
                onDatesChange={this.onDatesChange}
                onFocusChange={this.onFocusChange}
                focusedInput={focusedInput}
                startDate={startDate}
                endDate={endDate}
              />
              <select>
                <option>1 coder</option>
                <option>2 coders</option>
                <option>3 coders</option>
                <option>4 coders</option>
              </select>
              <button onClick={this.redirectToSpots}>Search</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
