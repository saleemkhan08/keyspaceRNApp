import {Dimensions, StyleSheet} from 'react-native';

export const DEVICE_WIDTH = Dimensions.get('screen').width;
export const DEVICE_HEIGHT = Dimensions.get('screen').height;

export const colors = {
  accent: '#F7BC45',
  black: '#000000',
  darkGrey: '#5F5F5F',
  green: '#4BA972',
  red: '#BC2C1A',
  lightBlue: '#AACBF7',
  lightGrey: '#DFDFDF',
  primary: '#2F2F2F',
  secondary: '#AFAFAF',
  white: '#ffffff',
  lighterGrey: '#EFEFEF',
  darkGreen: '#04555c',
  darkBlue: '#454e9e',
  lighterBlue: '#F8FAFB',
};

export const fontSize = {
  sm: 14,
  md: 18,
  lg: 26,
};

// export const fontFamily = {
//   bold: 'DMSans-Bold',
//   medium: 'DMSans-Medium',
//   regular: 'DMSans-Regular',
// };

export const baseStyles = StyleSheet.create({
  brandTitle: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: fontSize.lg,

    letterSpacing: 4,
  },
  headerLg: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: fontSize.lg,
  },
  headerMd: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: fontSize.md,
  },
  headerSm: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: fontSize.sm,
  },
  headerSmSpace: {
    color: colors.primary,
    fontWeight: 'bold',
    fontSize: fontSize.sm,
    letterSpacing: 1,
  },
  subHeader: {
    // fontFamily: fontFamily.bold,
    fontWeight: 'bold',
    fontSize: fontSize.sm,
    color: colors.secondary,
  },
  body: {
    // fontFamily: fontFamily.regular,
    fontSize: fontSize.sm,
    color: colors.primary,
  },
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
  },
  containerJustfiy: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  tabBar: {
    borderTopEndRadius: 35,
    borderTopStartRadius: 35,
    position: 'absolute',
    bottom: 0,
    padding: 10,
    width: DEVICE_WIDTH,
    height: 73,
    elevation: 5,
    shadowColor: colors.black,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
  },
  line: {
    borderBottomColor: colors.secondary,
    borderBottomWidth: 1,
    marginVertical: 30,
    borderRadius: 50,
  },
  cardShadow: {
    shadowColor: colors.black,
    elevation: 3,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  buttonShadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});
