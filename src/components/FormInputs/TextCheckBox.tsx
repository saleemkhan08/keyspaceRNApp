import React from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Text} from 'react-native';
import {colors} from 'src/utils/styles';

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
    height: 25,
    width: 25,
    borderRadius:6 ,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});
interface Props {
  onChange?: (isSelected: boolean) => void;
  isSelected: boolean;
  style?: object;
  color?: string;
  text: string;
}
function CheckBox(props: Props) {
  const {style, onChange, isSelected, color, text} = props;
  return (
    <TouchableWithoutFeedback onPress={() => onChange && onChange(!isSelected)}>
      <View style={[styles.outerView, {borderColor: color}, style]}>
        <View
          style={[
            styles.fill,
            {backgroundColor: isSelected ? color : colors.white},
          ]}>
          <Text
            style={[styles.text, {color: isSelected ? colors.white : color}]}>
            {text}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

CheckBox.defaultProps = {
  color: colors.darkBlue,
};

export default CheckBox;
