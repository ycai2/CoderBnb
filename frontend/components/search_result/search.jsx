import React from 'react';
import SearchResult from './search_result';
import MapView from './map_view';

const Search = ({ spots, requestSpots, updateBounds }) => {

    return (
      <div className="group search-page">
        <SearchResult
          spots={spots}
          requestSpots={requestSpots}
        />
        <MapView
          spots={spots}
          updateBounds={updateBounds}
        />
      </div>
    );
};

export default Search;
