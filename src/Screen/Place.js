import React from 'react';
import config from '../config';

import { Map } from '../Component';

export default class Place extends React.Component {
  render() {
    const {
      name, address, latitude, longitude,
    } = config.wedding.place;
    return (
      <div>
        <div>
          <p>{name}</p>
          <p>{address}</p>
        </div>
        <div>
          <Map data={config.wedding.place} />
        </div>
        <div>
          <a href="#">카카오 네비</a>
          <a href="#">네이버 네비</a>
        </div>
      </div>
    );
  }
}
