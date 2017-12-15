import React from 'react';
import ImageGallery from 'react-image-gallery';
import {
  Row,
  Col,
} from 'reactstrap';

export default function Gallery(props) {
  const { image } = props.config;
  return (
    <Row className="mb-5">
      <Col>
        <ImageGallery items={image.gallery} />
      </Col>
    </Row>
  );
}
