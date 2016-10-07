import React from 'react';
import MarkerManager from '../../util/marker_manager';


class MapView extends React.Component {
  constructor(props) {
    debugger
    super(props);
  }
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
    this.MarkerManager.updateMarkers(this.props.spots);
  }

  componentDidUpdate() {
    this.MarkerManager.updateMarkers(this.props.spots);
  }


  render() {
    return (
      <div id="map-container" ref="map">
      </div>
    )
  }
}

export default MapView;
