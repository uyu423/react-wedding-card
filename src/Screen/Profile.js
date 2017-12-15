import React from 'react';
import {
  Row, Col,
} from 'reactstrap';

import { ProfileCard } from '../Component';

export default function Profile(props) {
  const { bridal, groom } = props.config;
  return (
    <Row className="mt-3 mb-5">
      <Col>
        <ProfileCard profile={bridal} />
      </Col>
      <Col>
        <ProfileCard profile={groom} />
      </Col>
    </Row>
  );
}
