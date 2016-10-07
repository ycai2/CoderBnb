import React from 'react';
import SearchResult from './search_result';
import MapView from './map_view';

const Search = ({ spots, requestSpots }) => {
    return (
      <div>
        <SearchResult
          spots={spots}
          requestSpots={requestSpots}
        />
        <MapView />
      </div>
    );
};

export default Search;