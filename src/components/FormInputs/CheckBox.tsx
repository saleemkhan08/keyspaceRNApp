import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {colors} from 'src/utils/styles';
import Icon from 'react-native-vector-icons/FontAwesome5';

const styles = StyleSheet.create({
  outerView: {
    height: 32,
    width: 32,
    borderWidth: 4,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  fill: {
    height: 32,
    width: 32,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    fontSize: 16,
  },
});
interface Props {
  onChange?: (isSelected: boolean) => void;
  isSelected: boolean;
  backgroundColor?: string;
  iconColor?: string;
  children?: React.Component;
  style?: object;
}
function CheckBox(props: Props) {
  const {style, onChange, isSelected, iconColor, backgroundColor, children} =
    props;
  return (
    <TouchableWithoutFeedback onPress={() => onChange && onChange(!isSelected)}>
      <View style={[styles.outerView, {borderColor: backgroundColor}, style]}>
        {isSelected && (
          <View style={[styles.fill, {backgroundColor}]}>
            {children ? (
              children
            ) : (
              <Icon style={styles.icon} name="check" color={iconColor} />
            )}
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}

CheckBox.defaultProps = {
  backgroundColor: colors.darkBlue,
  iconColor: colors.white,
};

export default CheckBox;
