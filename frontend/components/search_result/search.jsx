import React from 'react';
import SearchResult from './search_result';
import MapView from './map_view';

const Search = ({ spots, requestSpots }) => {
  
    return (
      <div className="group search-page">
        <SearchResult
          spots={spots}
          requestSpots={requestSpots}
        />
        <MapView
          spots={spots}
        />
      </div>
    );
};

export default Search;
