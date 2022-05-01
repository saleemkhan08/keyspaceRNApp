import {StyleSheet} from 'react-native';
import {colors} from 'src/utils/styles';

export default StyleSheet.create({
  imageContainer: {
    width: '100%',
    alignItems: 'center',
  },
  logout: {
    height: 40,
    width: '100%',
    borderColor: colors.red,
    borderWidth: 2,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  logoutText: {
    color: colors.red,
    fontSize: 20,
  },
  image: {
    width: 200,
    resizeMode: 'contain',
    height: 200,
    borderRadius: 100,
  },
  container: {
    padding: 10,
  },
  userDetailContainer: {
    width: '100%',
    paddingTop: 100,
    paddingBottom: 100,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
    borderBottomWidth: 1,
    borderBottomColor: colors.darkGrey,
    margin: 10,
  },
  email: {
    fontSize: 14,
    color: colors.secondary,
  },
  number: {
    fontSize: 16,
    color: colors.secondary,
  },
  divider: {
    borderBottomColor: colors.darkGrey,
    borderBottomWidth: 1,
    margin: 10,
  },
  actionsContainer: {
    position: 'absolute',
    top: 60,
    right: 20,
  },
  input: {
    flex: 1,
    paddingHorizontal: 10,
    height: '100%',
    fontSize: 18,
    color: colors.darkBlue,
  },
  disabled: {
    backgroundColor: colors.lightGrey,
    borderRadius: 5,
    borderColor: colors.secondary,
    color: colors.darkGrey,
  },
});
