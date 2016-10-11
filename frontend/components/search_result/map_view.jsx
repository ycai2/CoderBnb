import React from 'react';
import MarkerManager from '../../util/marker_manager';
import { withRouter } from 'react-router';


class MapView extends React.Component {
  componentDidMount() {
    // find the `<map>` node on the DOM
    const mapDOMNode = this.refs.map;

    // set the map to show NYC
    const mapOptions = {
      center: {lat: 40.7258191, lng: -74.0119827},
      zoom: 13
    };

    // wrap the mapDOMNode in a Google Map
    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
    this._registerListeners();
    if (!!this.props.filters.coords.lat && !!this.props.filters.coords.lat) {
      this.map.setCenter(this.props.filters.coords);
    }
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  componentDidUpdate() {
    if (!!this.props.filters.coords.lat && !!this.props.filters.coords.lat) {
      this.map.setCenter(this.props.filters.coords);
    }
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  _registerListeners() {
    google.maps.event.addListener(this.map, 'idle', () => {
      const { north, south, east, west } = this.map.getBounds().toJSON();
      const bounds = {
        northEast: { lat: north, lng: east },
        southWest: { lat: south, lng: west }
      };

      this.props.updateBounds(bounds);
      // this.props.updateFilter('bounds', bounds);
    });
    // google.maps.event.addListener(this.map, 'click', event => {
    //   const coords = _getCoordsObj(event.latLng);
    //   this._handleClick(coords);
    // });
  }


  render() {
    return (
      <div id="map-container" ref="map">
      </div>
    )
  }
}

export default withRouter(MapView);
