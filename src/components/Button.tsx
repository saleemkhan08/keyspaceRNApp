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
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  roundedButton: {
    height: 50,
    borderRadius: 25,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    paddingVertical: 10,
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
    fontSize: 16,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: '500',
    textTransform: 'uppercase',
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
}

const Button: React.FC<Props> = (props: Props) => {
  const {title, onPress, iconName, rounded, textColor, bgColor, outlined} =
    props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        rounded ? styles.roundedButton : styles.button,
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
