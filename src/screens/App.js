import React, {useEffect, useState, useCallback} from 'react';
import {
  AppView,
  AppScrollView,
  AppText,
  AppSpinner,
  TouchableView,
  AppSwiper,
  AppImage,
} from '../common';
import {AppRepo} from '../repo';
import CourseDetails from '../components/app/CourseDetails';
import Trainer from '../components/app/Trainer';
import AboutCourse from '../components/app/AboutCourse';
import ReservationInfo from '../components/app/ReservationInfo';
import Swiper from '../components/app/Swiper';
import {StatusBar} from 'react-native';
import Header from '../components/app/Header';
const appRepo = new AppRepo();
const App = () => {
  const [content, setContent] = useState({
    isLoading: true,
    data: null,
  });
  const getData = useCallback(async () => {
    setContent((prev) => ({
      ...prev,
      isLoading: true,
    }));
    const data = await appRepo.getAppData();
    console.log(data, 'data from screen');
    setContent({
      data,
      isLoading: false,
    });
  }, []);
  useEffect(() => {
    getData();
  }, [getData]);
  return (
    <AppView flex stretch center>
      <StatusBar translucent backgroundColor="transparent" />
      {content.isLoading ? (
        <AppSpinner size={12} />
      ) : (
        <>
          <AppScrollView stretch marginBottom={10}>
            <Swiper data={content.data} />
            <CourseDetails data={content.data} />
            <Trainer data={content.data} />
            <AboutCourse data={content.data} />
            <ReservationInfo data={content.data} />
          </AppScrollView>
          <Header />
          <TouchableView stretch height={8} center backgroundColor="#8D3CA3">
            <AppText size={7} color="white">
              قم بالحجز الان
            </AppText>
          </TouchableView>
        </>
      )}
    </AppView>
  );
};

export default App;
