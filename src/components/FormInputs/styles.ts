import {StyleSheet} from 'react-native';
import {colors} from 'src/utils/styles';

export default StyleSheet.create({
  radioButtonLabel: {
    color: colors.darkBlue,
    fontSize: 16,
    fontWeight: '400',
    marginTop: 0,
    marginEnd: 10,
    marginStart: 5,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.darkGrey,
    marginTop: 5,
  },
  error: {
    color: colors.red,
    marginBottom: 5,
    textAlign: 'center',
  },
});
