import React from 'react';
import {
  Row, Col,
} from 'reactstrap';

import { Map } from '../Component';

export default function Place(props) {
  const {
    name, latitude, longitude,
  } = props.config.wedding.place;
  return (
    <Row>
      <Col>
        <Row className="pt-3">
          <Col>
            <h3>{name}</h3>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col>
            <Map config={props.config.wedding.place} />
          </Col>
        </Row>
        <Row className="nav-button">
          <Col className="pt-2 pb-2 pl-3 pr-1">
            <a href={`daummaps://look?p=${latitude},${longitude}`} className="btn btn-kakao btn-block" role="button">Kakao Map</a>
          </Col>
          <Col className="pt-2 pb-2 pr-3 pl-1">
            <a href={`navermaps://?menu=location&pinType=place&lat=${latitude}&lng=${longitude}&title=${name}`} className="btn btn-naver btn-block">NAVER Map</a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
