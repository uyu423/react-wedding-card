import React from 'react';
import {
  Row, Col,
} from 'reactstrap';
import FontAwesome from 'react-fontawesome';

export default function ProfileCard(props) {
  const {
    name,
    image,
    phone,
    facebook,
    father,
    mother,
    position,
  } = props.profile;
  return (
    <Row>
      <Col>
        <Row className="pt-3">
          <Col>
            <img className="img-fluid rounded-circle profile-image" src={image} alt={`${name}`} />
          </Col>
        </Row>
        <Row className="pt-4">
          <Col>
            <p className="mb-1">{father},{mother}의 {position}</p>
            <h4>{name}</h4>
          </Col>
        </Row>
        <Row className="pt-2">
          <Col>
            <a className="btn btn-secondary m-1" role="button" href={`tel:${phone}`}>
              <FontAwesome name="phone" />
            </a>
            <a className="btn btn-secondary m-1" role="button" href={`sms:${phone}`}>
              <FontAwesome name="envelope" />
            </a>
            { facebook
              ? <a className="btn btn-secondary m-1" role="button" href={facebook} target="_blank"><FontAwesome name="facebook-square" /></a>
              : '' }
          </Col>
        </Row>
      </Col>
    </Row>
  );
}
