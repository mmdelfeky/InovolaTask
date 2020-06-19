import React from 'react';
import Section from '../../common/Section';
import {AppText} from '../../common';

const AboutCourse = ({data}) => {
  return (
    <Section>
      <AppText bold size={7}>
        عن الدورة
      </AppText>
      <AppText>{data.occasionDetail}</AppText>
    </Section>
  );
};

export default AboutCourse;
