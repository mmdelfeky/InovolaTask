import React from 'react';
import {AppView, AppSwiper, AppImage} from '../../common';

const Swiper = ({data}) => {
  return (
    <AppView stretch>
      <AppSwiper
        autoplay
        height={40}
        width={100}
        backgroundColor="#fff"
        stretch
        center>
        {data.img.map((item) => {
          return (
            <AppImage
              key={item}
              source={{uri: item}}
              resizeMode="cover"
              stretch
              flex
            />
          );
        })}
      </AppSwiper>
    </AppView>
  );
};

export default Swiper;
