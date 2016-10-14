import React from 'react';
import SearchResult from './search_result';
import MapView from './map_view';

const Search = ({ spots, filters, requestSpots, updateBounds, updateFilters }) => {

    return (
      <div className="group search-page">
        <SearchResult
          spots={spots}
          updateFilters={updateFilters}
        />
        <MapView
          spots={spots}
          filters={filters}
          updateBounds={updateBounds}
          updateFilters={updateFilters}
        />
      </div>
    );
};

export default Search;
