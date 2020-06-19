import './Base/polyfill';

export {default as AppView} from './View';
export {default as AppScrollView} from './ScrollView';
export {default as AppText} from './Text';
export {default as AppIcon} from './Icon';
export {default as AppSpinner} from './Indicator';
export {default as AppImage} from './Image';
export {registerCustomIconType} from './utils/icon';
export {getColors, getColor, getTheme, getFonts} from './Theme';

export {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
  moderateScale,
  windowWidth,
  windowHeight,
  screenWidth,
  screenHeight,
  statusBarHeight,
} from './utils/responsiveDimensions';

export {default as AppSwiper} from './Swiper';
export {default as TouchableView} from './TouchableView';
