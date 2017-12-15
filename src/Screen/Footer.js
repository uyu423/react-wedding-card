import React from 'react';
import {
  Row,
  Col,
} from 'reactstrap';
import FontAwesome from 'react-fontawesome';

export default function Footer() {
  const a = '';
  return (
    <Row>
      <Col className="app-fluid app-footer d-flex justify-content-center align-items-center" >
        <p className="mb-0">
          <small className="text-muted">
            Code licensed under MIT License
            <span className="pl-2">
              <a href="https://github.com/uyu423/react-wedding-card"><FontAwesome name="github" /></a>
            </span>
          </small>
        </p>
      </Col>
    </Row>
  );
}
