import React from 'react';

export default class ProfileCard extends React.Component {
  render() {
    const {
      name,
      image,
      phone,
      facebook,
      father,
      mother,
    } = this.props.profile;
    return (
      <div>
        <div>
          <img src={image} alt={`${name}`} />
        </div>
        <div>
          { facebook ? <a href={facebook} target="_blank">FB</a> : '' }
          <a href={`tel:${phone}`}>TEL</a>
          <a href={`sms:${phone}`}>SMS</a>
        </div>
        <div>
          <p>
            아버지: {father}<br />
            어머니: {mother}
          </p>
        </div>
      </div>
    );
  }
}
