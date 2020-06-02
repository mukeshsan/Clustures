import React from 'react';
import './ApMap.css';
import GoogleMapReact from 'google-map-react';
import MarkerComponent from './Marker';

const ApMap = () => {
  const mapOption = {
    center: {
      lat: 13.641913,
      lng: 79.432962
    },
    zoom: 13
  };
  const mapMarker = {
    lat: 13.641913,
    lng: 79.432962
  };
  return (
    <div className='container MapWrapper'>
      <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAS3ix4rVY4A-T4yPzWlEi766ycl2mY818' }}
          defaultCenter={mapOption.center}
          defaultZoom={mapOption.zoom}
        >
          <MarkerComponent
            lat={mapMarker.lat}
            lng={mapMarker.lng}
          />
        </GoogleMapReact>
    </div>
  );
}

export default ApMap;
