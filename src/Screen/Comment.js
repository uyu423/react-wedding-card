import React from 'react';
import FacebookProvider, { Comments } from 'react-facebook';
import config from '../config';

export default class Comment extends React.Component {
  // render() {
  //   ((d, s, id) => {
  //     let js,
  //       fjs = d.getElementByTagName(s)[0];
  //     if (d.getElementById(id)) return;
  //     js = d.createElement(s);
  //     js.id = id;
  //     js.src = 'https://connect.facebook.net/ko_KR/sdk.js#xfbml=1&version=v2.11&appId=1876121155964971';
  //     fjs.parentNode.insertBefore(js, fjs);
  //   })(document, 'script', 'facebook-jssdk');
  //   return (
  //     <div className="fb-comments" data-href="https://developers.facebook.com/docs/plugins/comments#configurator" data-width="100%" data-numposts="10" />
  //   );
  // }
  render() {
    return (
      <div>
        <FacebookProvider appId={config.global.comment.facebookAppId}>
          <Comments width="100%" numPosts={10} href={config.global.url} />
        </FacebookProvider>
      </div>
    );
  }
}
