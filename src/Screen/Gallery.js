import React from 'react';
import ImageGallery from 'react-image-gallery';
import config from '../config';

export default class Gallery extends React.Component {
  render() {
    return (
      <div>
        <ImageGallery items={config.image.gallery} />
      </div>
    );
  }
}
