import React from 'react';
import { Row, Col } from 'reactstrap';
import { LivereComment, FacebookComment } from '../Component';

export default function Comment(props) {
  const { livere, facebook } = props.config.global.comment;
  const LivereComponentWrapper = (
    <Row>
      <Col>
        <LivereComment config={livere} />
      </Col>
    </Row>
  );
  const FacebookComponentWrapper = (
    <Row>
      <Col>
        <FacebookComment config={facebook} />
      </Col>
    </Row>
  );
  return (
    <Row>
      <Col>
        { livere.enable ? LivereComponentWrapper : '' }
        { facebook.enable ? FacebookComponentWrapper : '' }
      </Col>
    </Row>
  );
}
