import React from 'react';
import {AppView, AppText} from '../../common';

const ReservationItem = ({name, price}) => {
  return (
    <AppView stretch row spaceBetween>
      <AppText>{name}</AppText>

      <AppView row>
        <AppText>{price}</AppText>
        <AppText marginHorizontal={2}>SAR</AppText>
      </AppView>
    </AppView>
  );
};

export default ReservationItem;
