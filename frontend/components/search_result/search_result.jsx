import React from 'react';

class SearchResult extends React.Component {
  componentDidMount() {

  }

  render() {

  }
}

const SearchResultThumbnail = ({ spot }) => {
  return (
    <div>
      <h3>{spot.title}</h3>
      <div>
        <span>{spot.room_type}</span>
        <span>{spot.guest_count}</span>
        <span>{spot.rating}</span>
        <span>{spot.rating}</span>
      </div>
    </div>
  );
}
