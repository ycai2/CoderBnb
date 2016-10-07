import React from 'react';

class SearchResult extends React.Component {
  componentDidMount() {
    this.props.requestSpots();
  }

  render() {
    return (
      <div className="search-result">
        <ul>
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
