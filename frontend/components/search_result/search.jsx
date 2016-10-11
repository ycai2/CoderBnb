import React from 'react';
import SearchResult from './search_result';
import MapView from './map_view';

const Search = ({ spots, filters, requestSpots, updateBounds }) => {

    return (
      <div className="group search-page">
        <SearchResult
          spots={spots}
        />
        <MapView
          spots={spots}
          filters={filters}
          updateBounds={updateBounds}
        />
      </div>
    );
};

export default Search;
