import React from 'react';
import { Link } from 'react-router';
import AutocompleteContainer from '../search_autocomplete/autocomplete_container';

class SpotForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: "",
      state: "",
      zipcode: "",
      title: "",
      room_type: "lab",
      price: 0,
      description: "",
      lat: 40.7250239,
      lng: -73.996792,
      guest_count: 1,
      imageFile: null,
      imageUrl: null,
    }
    this.fillForm = this.fillForm.bind(this);
    this.submitSpot = this.submitSpot.bind(this);
    this.updateField = this.updateField.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentDidMount() {
    const mapDOMNode = this.refs.map;
    const center = {lat: this.state.lat, lng: this.state.lng};
    const mapOptions = {
      center,
      zoom: 15,
      disableDefaultUI: true,
      disableDoubleClickZoom: true,
      scaleControl: false,
      scrollwheel: false,
      zoomControl: false,
      draggable: false,
      navigationControl: false
    };
    const marker = new google.maps.Marker();

    this.map = new google.maps.Map(mapDOMNode, mapOptions);
    marker.setMap(this.map);
    marker.setPosition(center);
  }

  componentDidUpdate() {
    this.map.setCenter({lat: this.state.lat, lng: this.state.lng})
  }

  fillForm(location) {
    location.address_components.forEach((component) => {
      if (component.types.includes("locality")) {
        this.setState({city: component.long_name});
      }
      if (component.types.includes("administrative_area_level_1")) {
        this.setState({state: component.short_name});
      }
      if (component.types.includes("postal_code")) {
        this.setState({zipcode: component.long_name});
      }
    })
    this.setState({
      lat: parseFloat(location.geometry.location.lat()),
      lng: parseFloat(location.geometry.location.lng())
    });
  }

  updateField(field) {
    return (e) => this.setState({
			[field]: e.currentTarget.value
		});
  }

  updateFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        imageFile: file,
        imageUrl: fileReader.result
      });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  submitSpot(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("spot[title]", this.state.title);
    formData.append("spot[description]", this.state.description);
    formData.append("spot[room_type]", this.state.room_type);
    formData.append("spot[price]", this.state.price);
    formData.append("spot[guest_count]", this.state.guest_count);
    formData.append("spot[lat]", this.state.lat);
    formData.append("spot[lat]", this.state.lat);
    formData.append("spot[lng]", this.state.lng);
    formData.append("spot[image]", this.state.imageFile);

    this.props.createSpot(formData);
  }

  render() {
    return (
      <form action="/spots/new" method="POST" className="new-spot-form-info">
        <h1>Where's your place located?</h1>

        <label htmlFor="street">Street Address</label>
        <AutocompleteContainer id="street" callback={this.fillForm} />
        <label htmlFor="city">City</label>
        <input id="city" value={this.state.city} onChange={this.updateField('city')} />
        <label htmlFor="state">State</label>
        <input id="state" value={this.state.state} onChange={this.updateField('state')} />
        <label htmlFor="zipcode">ZIP Code</label>
        <input id="zipcode" value={this.state.zipcode} onChange={this.updateField('zipcode')} />

        <label htmlFor="title">Title</label>
        <input id="title" value={this.state.title} onChange={this.updateField('title')} />
        <label htmlFor="description">Description</label>
        <textarea id="description" value={this.state.description} onChange={this.updateField('description')}></textarea>
        <label htmlFor="price">Price</label>
        <input id="price" value={this.state.price} onChange={this.updateField('price')} />
        <label htmlFor="room-type">Price</label>
        <select id="room-type" selected={this.state.room_type} onChange={this.updateField('room_type')}>
          <option value="lab">lab</option>
          <option value="basement">basement</option>
          <option value="penthouse">penthouse</option>
        </select>

        <label htmlFor="guest-count">Max Guest Count</label>
        <select id="guest-count" selected={this.state.guest_count} onChange={this.updateField('guest_count')}>
          <option value="1">1 coder</option>
          <option value="2">2 coders</option>
          <option value="3">3 coders</option>
          <option value="4">4 coders</option>
        </select>
        <p>Caution: Too many coders may cause problems. </p>


        <hr />
        <input type="file" onChange={this.updateFile} />
        <img src={this.state.imageUrl} />
        <div id="new-spot-map-container" ref="map">
        </div>
        <hr />
        <div className="button-control">
          <Link to="/">Cancel</Link>
          <button onClick={this.submitSpot}>Finish</button>
        </div>
      </form>
    );
  }
}

export default SpotForm;
