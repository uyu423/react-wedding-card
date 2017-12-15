/* global document */
import React from 'react';

const mountLivereCommentPlugin = (d, s) => {
  const e = d.getElementsByTagName(s)[0];

  if (typeof LivereTower === 'function') { return; }

  const j = d.createElement(s);
  j.src = 'https://cdn-city.livere.com/js/embed.dist.js';
  j.async = true;

  e.parentNode.insertBefore(j, e);
};

export default class LivereComment extends React.Component {
  componentDidMount() {
    mountLivereCommentPlugin(document, 'script');
  }
  render() {
    const { service, uid } = this.props.config;
    return (
      <div id="lv-container" data-id={service} data-uid={uid} />
    );
  }
}
