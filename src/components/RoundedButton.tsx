import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from 'utils/styles';
const styles = StyleSheet.create({
  roundedButton: {
    height: 40,
    borderRadius: 20,
    borderColor: colors.primary,
  },
});
interface Props {
  onPress: () => void;
  children: any;
}
function RoundedButton(props: Props) {
  const {onPress, children} = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.roundedButton}>
      {children}
    </TouchableOpacity>
  );
}

RoundedButton.defaultProps = {};

export default RoundedButton;
