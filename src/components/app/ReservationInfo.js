import React from 'react';
import Section from '../../common/Section';
import {AppText} from '../../common';
import ReservationItem from './ReservationItem';

const ReservationInfo = ({data}) => {
  return (
    <Section border={false}>
      <AppText bold size={7}>
        تكلفة الدورة
      </AppText>
      {data.reservTypes.map(({id, name, price}) => (
        <ReservationItem key={id} {...{name}} {...{price}} />
      ))}
    </Section>
  );
};

export default ReservationInfo;
