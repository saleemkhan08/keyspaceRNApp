import {StyleSheet} from 'react-native';
import {DEVICE_HEIGHT, colors, fontSize} from 'utils/styles';
export default StyleSheet.create({
  circle: {
    backgroundColor: colors.white,
    position: 'absolute',
    width: DEVICE_HEIGHT,
    height: DEVICE_HEIGHT,
    borderRadius: DEVICE_HEIGHT / 2,
    top: -DEVICE_HEIGHT * 0.425,
    left: -DEVICE_HEIGHT * 0.27,
  },
  logoContainer: {
    width: '100%',
    position: 'absolute',
    top: 0,
    paddingHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    resizeMode: 'contain',
  },
  inputContainer: {
    width: '90%',
    height: 50,
    flexDirection: 'row',
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 50,
    width: '100%',
    borderWidth: 0,
    paddingStart: 2,
    paddingEnd: 10,
    fontSize: fontSize.md,
    color: colors.primary,
  },
  inputLeftElement: {
    height: 40,
    paddingStart: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputStartText: {fontSize: fontSize.md, marginStart: 10},
  submitNumber: {
    height: 40,
    width: 40,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderColor: colors.primary,
    backgroundColor: colors.primary,
    marginRight: 5,
  },
  formContainer: {
    marginVertical: 20,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  otpContainer: {
    alignItems: 'center',
    marginBottom: 10,
  },
  changeNumberButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  otpActionText: {
    fontSize: fontSize.sm,
  },
  otpActions: {
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
