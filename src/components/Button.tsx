/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from 'src/utils/styles';

const styles = StyleSheet.create({
  button: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  roundedButton: {
    borderRadius: 25,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  outlined: {
    borderWidth: 1,
  },
  solid: {
    borderWidth: 0,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: '500',
    textTransform: 'uppercase',
  },
  small: {
    fontSize: 10,
    height: 25,
  },
  medium: {
    fontSize: 16,
    height: 30,
  },
  large: {
    fontSize: 18,
    height: 50,
  },
});
interface Props {
  onPress: () => void;
  title?: string;
  rounded?: boolean;
  iconName?: string;
  outlined?: boolean;
  textColor?: string;
  bgColor?: string;
  small?: boolean;
  medium?: boolean;
  large?: boolean;
}

const Button: React.FC<Props> = (props: Props) => {
  const {
    title,
    onPress,
    iconName,
    rounded,
    textColor,
    bgColor,
    outlined,
    small,
    large,
  } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        rounded ? styles.roundedButton : styles.button,
        small ? styles.small : styles.medium,
        large ? styles.large : styles.medium,
        outlined ? styles.outlined : styles.solid,
        {
          backgroundColor: outlined ? 'transparent' : bgColor,
          borderColor: bgColor,
        },
      ]}>
      {iconName && (
        <Icon
          style={styles.icon}
          name={iconName}
          size={30}
          color={colors.white}
        />
      )}
      <View>
        {title && (
          <Text
            style={[
              styles.text,
              {
                color: textColor,
              },
            ]}>
            {title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  rounded: true,
  outlined: true,
  bgColor: colors.darkBlue,
  textColor: colors.darkBlue,
};

export default Button;
