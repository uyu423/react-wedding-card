import React from 'react';
import config from '../config';

import { ProfileCard } from '../Component';

export default class Profile extends React.Component {
  render() {
    return (
      <div>
        <div>
          <ProfileCard profile={config.bridal} />
        </div>
        <div>
          <ProfileCard profile={config.groom} />
        </div>
      </div>
    );
  }
}
