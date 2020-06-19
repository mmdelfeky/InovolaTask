import React from 'react';

import {AppView, AppIcon, TouchableView} from '../../common';

import {StyleSheet, Platform, StatusBar} from 'react-native';

const APPBAR_HEIGHT = Platform.OS === 'ios' ? 54 : 56;
const styles = StyleSheet.create({
  container: {
    height: APPBAR_HEIGHT,
    position: 'absolute',
    left: 0,
    right: 0,
    top: StatusBar.currentHeight,
    zIndex: 1000,
  },
});
const Header = () => {
  const renderRight = () => {
    return (
      <AppView stretch flex={2} center spaceBetween row>
        <TouchableView center stretch flex>
          <AppIcon name="sharealt" type="ant" color="white" size={9} />
        </TouchableView>

        <TouchableView center stretch flex>
          <AppIcon name="star-o" type="font-awesome" color="white" size={9} />
        </TouchableView>
      </AppView>
    );
  };

  const renderLeft = () => {
    return (
      <TouchableView marginHorizontal={5} center flex>
        <AppIcon
          flip
          name="keyboard-arrow-left"
          type="material"
          color="white"
          size={13}
        />
      </TouchableView>
    );
  };

  const renderCenter = () => {
    return <AppView flex={6} center />;
  };

  return (
    <AppView
      backgroundColor="rgba(0,0,0,.05)"
      style={styles.container}
      row
      spaceBetween>
      {renderLeft()}
      {renderCenter()}
      {renderRight()}
    </AppView>
  );
};

export default Header;
