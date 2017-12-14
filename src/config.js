const gallery = [
  require('./Image/gallery/1.png'),
  require('./Image/gallery/2.jpg'),
  require('./Image/gallery/3.jpg'),
  require('./Image/gallery/4.jpg'),
  require('./Image/gallery/5.jpg'),
  require('./Image/gallery/6.jpg'),
];

export default {
  global: {
    url: 'https://luckyyowu.tistory.com',
    comment: {
      enable: true,
      facebookAppId: '1535680996513864',
    },
    googleMapAPIKey: '',
  },
  wedding: {
    place: {
      name: '예쁜 예식장 3F',
      address: '서울 영등포구 여의도동 60 63빌딩',
      latitude: 37.51990006878117,
      longitude: 126.94020220536675,
    },
    at: '2018-01-27 15:00',
  },
  bridal: {
    name: '김철수',
    image: require('./Image/bridal.jpg'),
    phone: '+82 10 1111 1111',
    facebook: 'https://facebook.com/luckyyowu',
    father: '철수아빠',
    mother: '철수엄마',
  },
  groom: {
    name: '김영희',
    image: require('./Image/groom.jpg'),
    phone: '+82 10 2222 2222',
    facebook: false,
    father: '영희아빠',
    mother: '영희엄마',
  },
  image: {
    header: require('./Image/header.jpg'),
    gallery: gallery.map(item => ({
      original: item,
      thumbnail: item,
    })),
  },
};
