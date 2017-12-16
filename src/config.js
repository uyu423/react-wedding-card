const gallery = [ // galley image list
  require('./Image/gallery/1.png'),
  require('./Image/gallery/2.jpg'),
  require('./Image/gallery/3.jpg'),
  require('./Image/gallery/4.jpg'),
  require('./Image/gallery/5.jpg'),
  require('./Image/gallery/6.jpg'),
];

export default {
  global: {
    googleMapAPIKey: 'AIzaSyDSjYdBUN_NDRJQShxs0ugvMBV2goZvT2o',
    comment: {
      livere: {
        enable: true, // if false, not rendering livere comment component
        service: 'city',
        uid: 'MTAyMC8yNTYzNi8yMjMy',
      },
      facebook: {
        enable: false, // if false, not rendering facebook comment component
        appId: '1535680996513864',
      },
    },
  },
  title: 'Wedding Invitation', // recomanded English
  wedding: {
    place: {
      name: '예쁜 예식장 3F 아름다운홀',
      address: '서울 영등포구 여의도동 60 63빌딩',
      latitude: 37.51990006878117,
      longitude: 126.94020220536675,
    },
    at: '2018-01-27 12:00',
  },
  bridal: {
    name: '신사동',
    image: require('./Image/bridal.jpeg'),
    phone: '+821011111111',
    facebook: false, // if false, not showing facebook icon
    father: '서울시',
    mother: '강남구',
    position: '장남',
  },
  groom: {
    name: '역곡동',
    image: require('./Image/groom.jpeg'),
    phone: '+821022222222',
    facebook: 'https://www.facebook.com/luckyyowu',
    father: '부천시',
    mother: '원미구',
    position: '차녀',
  },
  image: {
    header: require('./Image/header.jpg'),
    gallery: gallery.map(item => ({
      original: item,
      thumbnail: item,
    })),
  },
};
