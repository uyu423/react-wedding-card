/* global google */
import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from 'react-google-maps';
import config from '../config';

const GenerateGoogleMap = withScriptjs(withGoogleMap((props) => {
  const {
    latitude, longitude, name, address,
  } = config.wedding.place;
  return (
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: latitude, lng: longitude }}
    >
      {<Marker position={{ lat: latitude, lng: longitude }}>
        <InfoWindow>
          <div>
            <h3>{name}</h3>
            <h4>{address}</h4>
          </div>
        </InfoWindow>
      </Marker>}
    </GoogleMap>
  );
}));

export default class Map extends React.Component {
  render() {
    return (
      <div>
        <GenerateGoogleMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${config.global.googleMapAPIKey}`}
          loadingElement={<div style={{ height: '100%' }} />}
          containerElement={<div style={{ height: '400px' }} />}
          mapElement={<div style={{ height: '100%' }} />}
        />
      </div>
    );
  }
}
