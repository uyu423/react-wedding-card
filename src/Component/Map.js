import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';
import {
  Badge,
} from 'reactstrap';
import config from '../config';

const GenerateGoogleMap = withScriptjs(withGoogleMap((props) => {
  const {
    latitude, longitude, address,
  } = config.wedding.place;
  return (
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: latitude, lng: longitude }}
    >
      <Marker position={{ lat: latitude, lng: longitude }}>
        <InfoWindow>
          <div>
            <p className="lead text-left"><Badge>주소</Badge> {address}</p>
          </div>
        </InfoWindow>
      </Marker>
    </GoogleMap>
  );
}));

export default function Map() {
  return (
    <GenerateGoogleMap
      googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${config.global.googleMapAPIKey}`}
      loadingElement={<div style={{ height: '100%' }} />}
      containerElement={<div style={{ height: '450px' }} />}
      mapElement={<div style={{ height: '100%' }} />}
    />
  );
}
