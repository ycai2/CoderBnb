import React from 'react';
import { DateRangePicker } from 'react-dates';
import { hashHistory, Link } from 'react-router';
import Rheostat from 'rheostat';
import merge from 'lodash/merge';
import StarRating from '../star_rating';


class SearchResult extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focusedInput: null,
      startDate: null,
      endDate: null,
      guest_count: 1,
      room_type: {
        basement: false,
        lab: false,
        penthouse: false
      },
      min_price: 1,
      max_price: 1000
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.updateField = this.updateField.bind(this);
    this.checkField = this.checkField.bind(this);
    this.updatePrice = this.updatePrice.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
    this.props.updateFilters({ startDate, endDate });
  }

  onFocusChange(focusedInput) {
    this.setState({ focusedInput });
  }

  componentDidMount() {
    // this.props.requestSpots();
  }

  updateField(field) {
    return (e) => {
      this.setState({
			     [field]: e.currentTarget.value
		  });
      this.props.updateFilters({ [field]: e.currentTarget.value });
    };
  }

  checkField(field) {
    return (e) => {
      const currentChecked = this.state.room_type[field];
      const newRoomType = merge({}, this.state.room_type, {[field]: !currentChecked});
      this.setState({
        room_type: newRoomType
      });
      this.props.updateFilters({ room_type: newRoomType });
    }
  }

  updatePrice(e) {
    const newState = {
      min_price: e.values[0],
      max_price: e.values[1]
    };

    this.setState(newState);
    this.props.updateFilters(newState);
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
            <div className="dropdown-wrapper">
              <select selected={this.state.guest_count} onChange={this.updateField('guest_count')}>
                <option value={1}>1 coder</option>
                <option value={2}>2 coders</option>
                <option value={3}>3 coders</option>
                <option value={4}>4 coders</option>
              </select>
            </div>
          </div>
          <hr />
          <div className="room-type">
            <span className="room-type-title title">Room type</span>
            <div className="checkbox-control-group group">
              <div className="checkbox-control">
                <i className="fa fa-server" aria-hidden="true"></i>
                <label htmlFor="room-type-basement">Basement</label>
                <input
                  type="checkbox"
                  id="room-type-basement"
                  checked={this.state.room_type.basement}
                  onChange={this.checkField('basement')}
                />
              </div>
              <div className="checkbox-control">
                <i className="fa fa-laptop" aria-hidden="true"></i>
                <label htmlFor="room-type-lab">Lab</label>
                <input
                  type="checkbox"
                  id="room-type-lab"
                  checked={this.state.room_type.lab}
                  onChange={this.checkField('lab')}
                />
              </div>
              <div className="checkbox-control">
                <i className="fa fa-rocket" aria-hidden="true"></i>
                <label htmlFor="room-type-penthouse">Penthouse</label>
                <input
                  type="checkbox"
                  id="room-type-penthouse"
                  value="penthouse"
                  checked={this.state.room_type.penthouse}
                  onChange={this.checkField('penthouse')}
                />
              </div>
            </div>
          </div>
          <hr />
          <div className="price-range group">
            <span className="title price-title">Price range</span>
            <div className="price-slider">
              <Rheostat class="price-range-picker"
                min={1}
                max={1000}
                values={[this.state.min_price, this.state.max_price]}
                onChange={this.updatePrice}
              />
              <div className="price-range-labels">
                <div>{this.state.min_price}</div>
                <div>{this.state.max_price}</div>
              </div>

            </div>
          </div>
        </div>
        <ul className="spot-list">
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
      <Link to={`/spots/${spot.id}`}>
        <div className="thumbnail">
          <img src={spot.image_url} />
          <h3>${spot.price}</h3>
        </div>
        <div className="thumbnail-info">
          <h3>{spot.title}</h3>
          <span>{spot.room_type} · </span>
          <span>{spot.guest_count} coder(s) · </span>
          <span><StarRating stars={spot.rating} /> · </span>
          <span>{spot.review_count} review(s)</span>
        </div>
      </Link>
    </li>
  );
}

export default SearchResult;
