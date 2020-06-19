import React, {useCallback} from 'react';
import {AppView, AppText, AppIcon} from '../../common';
import moment from 'moment';
import 'moment/locale/ar';
import Section from '../../common/Section';
moment.locale('ar');
const CourseDetails = ({data}) => {
  const renderInterest = useCallback(() => {
    return (
      <AppView row>
        <AppText>#</AppText>
        <AppText marginHorizontal={2}>{data.interest}</AppText>
      </AppView>
    );
  }, [data]);

  const rendertime = useCallback(() => {
    return (
      <AppView stretch row marginVertical={3}>
        <AppIcon
          size={10}
          name="calendar-month-outline"
          type="material-community"
        />
        <AppText marginHorizontal={2}>
          {moment(data.date).format('dddd, DD MMM, HH:MM A')}
        </AppText>
      </AppView>
    );
  }, [data]);

  const renderLocation = useCallback(() => {
    return (
      <AppView stretch row>
        <AppIcon size={10} name="pushpino" type="ant" flip />
        <AppText marginHorizontal={2}>{data.address}</AppText>
      </AppView>
    );
  }, [data]);
  return (
    <Section>
      {renderInterest()}

      <AppText lineHeight={10} bold size={7} color="darkgrey">
        الاسم الكامل للدورة بشكل افتراضي من اجل اظهار من اجل اظهار شكل التصميم
      </AppText>
      {rendertime()}
      {renderLocation()}
    </Section>
  );
};

export default CourseDetails;
