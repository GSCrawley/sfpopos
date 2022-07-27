import React from "react";
import GoogleMapReact from 'google-map-react';
import { ReactDOM } from 'react-dom'; 
// import data from '../../sfpopos-data.js'


const LocationMarker = ({ text }) => (
  <div style={{
    color: 'white', 
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>{text}
  </div>
  )

class SimpleMap extends React.Component {
  static defaultProps = {
    center: {lat: 59.95, lng: 30.33},
    zoom: 11
  }; 
  render() {
    return (
      <div className="mapContainer" style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        defaultCenter={this.props.center}
        defaultZoom={this.props.zoom}
      >
        <LocationMarker
          lat={59.955413}
          lng={30.337844}
          text={" "}
        />
      </GoogleMapReact>
      </div>
      );
  }
}

ReactDOM.render(
  <div style={{width: '100%', height: '400px'}}>
    <SimpleMap />
    </div>, document.getElementById('map')
    );

export default SimpleMap;