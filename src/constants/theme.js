import { Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window');

export const COLORS = {
  primary: '#FFF', //orange
  secondary: '#2c2c2c',
  transparentPrimary: '#AAD8EE',

  orange: '#FFA133',
  yellow: '#F1CD7C',
  lightYellow: '#FFD88A',
  lightOrange: '#FFA133',
  lightOrange2: '#FDDED4',
  lightOrange3: '#FFD9AD',
  green: '#27AE60',
  red: '#E13510',
  red2: '#FF6C44',
  primaryRed:'#FB7181',
  blue: '#0064C0',
  primaryBlue:'#40BFFF',
  lightBlue: '#72bcd4',
  darkBlue: '#111A2C',
  darkGray: '#525C67',
  darkGray2: '#757D85',
  gray: '#898B9A',
  gray2: '#BBBDC1',
  gray3: '#CFD0D7',
  grey:'#9098B1',
  lightGray1: '#DDDDDD',
  lightGray2: '#F5F5F8',
  lightGray3: '#E2E2E2',
  lightGray4: '#EDEDED',
  white2: '#FBFBFB',
  white: '#FFFFFF',
  black: '#3D3942',
  neutralLight:'#EBF0FF',
  neutralDark:'#223263',

  active: '#3498db',
  inactive: '#bdc3c7',
  
  transparent: 'transparent',
  transparentWhite1: 'rgba(255, 255, 255, 0.1)',
  transparentBlack1: 'rgba(0, 0, 0, 0.1)',
  transparentBlack7: 'rgba(0, 0, 0, 0.7)',
};
export const SIZES = {
  // Global sizes
  sxm:4,
  sm: 8,
  md: 16,
  lg: 24,
  x: 28,
  xl: 32,
  xxl: 40,

  // font sizes
  largeTitle: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  h5: 12,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,
  radius: 20,
  bodyerror:12,
  btnFont:14,
  bodyNumber:16,
  // app dimensions
  width,
  height,
};

export const CUSTOMFONTS ={
  'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
  'Poppins-BlackItalic': require('../assets/fonts/Poppins-BlackItalic.ttf'),
  'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
  'Poppins-BoldItalic': require('../assets/fonts/Poppins-BoldItalic.ttf'),
  'Poppins-ExtraBold': require('../assets/fonts/Poppins-ExtraBold.ttf'),
  'Poppins-ExtraBoldItalic': require('../assets/fonts/Poppins-ExtraBoldItalic.ttf'),
  'Poppins-ExtraLight': require('../assets/fonts/Poppins-ExtraLight.ttf'),
  'Poppins-ExtraLightItalic': require('../assets/fonts/Poppins-ExtraLightItalic.ttf'),
  'Poppins-Italic': require('../assets/fonts/Poppins-Italic.ttf'),
  'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
  'Poppins-LightItalic': require('../assets/fonts/Poppins-LightItalic.ttf'),
  'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
  'Poppins-MediumItalic': require('../assets/fonts/Poppins-MediumItalic.ttf'),
  'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
  'Poppins-SemiBoldItalic': require('../assets/fonts/Poppins-SemiBoldItalic.ttf'),
  'Poppins-Thin': require('../assets/fonts/Poppins-Thin.ttf'),
  'Poppins-ThinItalic': require('../assets/fonts/Poppins-ThinItalic.ttf'),
};

export const FONTS = {
  largeTitle: { fontFamily: 'Poppins-Black', fontSize: SIZES.largeTitle },
  h1: { fontFamily: 'Poppins-Bold', fontSize: SIZES.h1, lineHeight: 36 },
  h2: { fontFamily: 'Poppins-Bold', fontSize: SIZES.h2, lineHeight: 30 },
  h3: { fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h3, lineHeight: 22 },
  h4: { fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h4, lineHeight: 22 },
  h5: { fontFamily: 'Poppins-SemiBold', fontSize: SIZES.h5, lineHeight: 22 },

  Heading3: { fontFamily: 'Poppins-Bold', fontSize: SIZES.h2, lineHeight: 22 },
  Heading4: { fontFamily: 'Poppins-Bold', fontSize: SIZES.h3, lineHeight: 22 },
  Heading5: { fontFamily: 'Poppins-Bold', fontSize: SIZES.h4, lineHeight: 22 },
  body1: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body1,
    lineHeight: 36,
  },
  body2: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body2,
    lineHeight: 30,
  },
  body3: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body3,
    lineHeight: 25.2,
  },
  body4: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body4,
    lineHeight: 25.2,
  },
  body5: {
    fontFamily: 'Poppins-Regular',
    fontSize: SIZES.body5,
    lineHeight: 25.2,
  },
  bodyerror: {
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.bodyerror,
    lineHeight: 18,
  },
  btnFont:{
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.btnFont,
    lineHeight: 25.2,
  },
  bodyNumber:{
    fontFamily: 'Poppins-Bold',
    fontSize: SIZES.bodyNumber,
    lineHeight: 24,
  }

};

export const darkTheme = {
  name: 'dark',
  backgroundColor: COLORS.black,
  textColor: COLORS.white,
  tabBackroundColor: COLORS.lightGray1,
  cardBackgroundColor: COLORS.gray3,
  bottomTabBarBackgroundColor: COLORS.gray3,
  headerColor: COLORS.yellow,
};
export const lightTheme = {
  name: 'light',
  backgroundColor: COLORS.primary,
  textColor: COLORS.black,
  tabBackroundColor: COLORS.yellow,
  cardBackgroundColor: COLORS.lightYellow,
  bottomTabBarBackgroundColor: COLORS.lightYellow,
  headerColor: COLORS.red,
};

export const selectedTheme = lightTheme;

const appTheme = { SIZES, FONTS, CUSTOMFONTS, COLORS, lightTheme, darkTheme };

export default appTheme;