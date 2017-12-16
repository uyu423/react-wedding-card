import React from 'react';
import moment from 'moment';
import {
  Row,
  Col,
} from 'reactstrap';
import FontAwesome from 'react-fontawesome';

import 'moment/locale/ko';

export default function Header(props) {
  const {
    bridal, groom, image, wedding, title,
  } = props.config;
  moment.locale('ko');
  return (
    <Row className="pb-4">
      <Col>
        <Row>
          <Col className="app-fluid">
            <div className="app-header d-flex justify-content-center align-items-center">
              <h2 className="mb-0">{title}</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="pt-5">
            <h4>
              {bridal.name}&nbsp;
              <small>
                <span className="text-middle" style={{ color: 'red' }}>
                  <FontAwesome name="heart" />
                </span>
              </small>
              &nbsp;{groom.name}
            </h4>
          </Col>
        </Row>
        <Row className="pt-5">
          <Col className="app-fluid">
            <img className="img-fluid" src={image.header} alt="header" />
          </Col>
        </Row>
        <Row className="pt-5">
          <Col>
            <h5 className="pt-3">{moment(wedding.at, 'YYYY-MM-DD HH:mm').format('LLLL')}</h5>
            <p>{wedding.place.name}</p>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
