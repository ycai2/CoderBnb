import React from 'react';
import { DateRangePicker } from 'react-dates';
import RoomType from './filters/room_type';
import Price from './filters/price';

class SearchResult extends React.Component {
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

  componentDidMount() {
    this.props.requestSpots();
  }

  render() {
    const { focusedInput, startDate, endDate } = this.state;

    return (
      <div className="search-result">
        <div className="filter">
          <div className="dates">
            <span className="date-title title">Dates</span>
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
          </div>
          <hr />
          <RoomType />
          <hr />
          <div className="price-range">
            <Price />
          </div>
        </div>
        <ul className="spot-list group">
          {
            this.props.spots.map((spot) => {
              return <SearchResultItem spot={spot} key={spot.id} />
            })
          }
        </ul>
      </div>
    );
  }
}

const SearchResultItem = ({ spot }) => {
  return (
    <li>
      <img src={spot.image_url} />
      <h3>{spot.price}</h3>
      <h3>{spot.title}</h3>
      <div>
        <span>{spot.room_type}</span>
        <span>{spot.guest_count}</span>
        <span>{spot.rating}</span>
        <span>{spot.review_count}</span>
      </div>
    </li>
  );
}

export default SearchResult;
