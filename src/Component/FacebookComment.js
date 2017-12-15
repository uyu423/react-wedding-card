/* global document */
import React from 'react';

const mountFacebookCommentPlugin = (d, s, id, appId) => {
  const fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  const js = d.createElement(s); js.id = id;
  js.src = `https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v2.11&appId=${appId}`;
  fjs.parentNode.insertBefore(js, fjs);
};

export default class FacebookComment extends React.Component {
  componentDidMount() {
    const { appId } = this.props.config;
    mountFacebookCommentPlugin(document, 'script', 'facebook-jssdk', appId);
  }
  render() {
    return (
      <div
        className="fb-comments"
        data-href="https://developers.facebook.com/docs/plugins/comments#configurator"
        data-width="100%"
        data-numposts="8"
      />
    );
  }
}
