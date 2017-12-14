import React from 'react';
import moment from 'moment';
import 'moment/locale/ko';
import config from '../config';

export default class Header extends React.Component {
  render() {
    const {
      bridal, groom, image, wedding,
    } = config;
    moment.locale('ko');
    return (
      <div>
        <p>{bridal.name} & {groom.name}<br />결혼식에 초대합니다.</p>
        <img src={image.header} alt="header" />
        <p>{moment(wedding.at, 'YYYY-MM-DD HH:mm').format('LLLL')}</p>
        <p>{wedding.place.name}</p>
      </div>
    );
  }
}
