import React, {useCallback} from 'react';
import {AppView, AppText, AppImage} from '../../common';
import Section from '../../common/Section';
const Trainer = ({data}) => {
  const renderAvatar = useCallback(() => {
    return (
      <AppView stretch row>
        <AppImage
          circleRadius={12}
          source={{uri: 'http' + data.trainerImg.split('https')[1]}}
        />
        <AppText marginHorizontal={3} size={6} bold color="darkgrey">
          {data.trainerName}
        </AppText>
      </AppView>
    );
  }, [data]);
  return (
    <Section>
      {renderAvatar()}
      <AppText>{data.trainerInfo}</AppText>
    </Section>
  );
};

export default Trainer;
