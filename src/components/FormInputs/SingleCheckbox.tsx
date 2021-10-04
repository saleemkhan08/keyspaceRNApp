/* eslint-disable react-native/no-inline-styles */
import CheckBox from 'components/FormInputs/CheckBox';
import React from 'react';
import {Controller} from 'react-hook-form';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from 'src/utils/styles';
import commonStyles from './styles';

const styles = StyleSheet.create({
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 5,
  },
});
interface Props {
  label: string;
  control: any;
  name: string;
  errorMessage?: string;
  defaultValue?: boolean;
}
function SingleCheckbox(props: Props) {
  const {control, name, label, errorMessage, defaultValue} = props;
  const dynamicColor = errorMessage ? colors.red : colors.darkBlue;
  return (
    <Controller
      control={control}
      render={({field: {onChange, value}}) => (
        <View>
          <View style={styles.innerContainer}>
            <CheckBox
              backgroundColor={dynamicColor}
              isSelected={value}
              onChange={() => onChange(!value)}
            />
            <TouchableOpacity onPress={() => onChange(!value)}>
              <Text
                style={[commonStyles.radioButtonLabel, {color: dynamicColor}]}>
                {label}
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={[commonStyles.error, {textAlign: 'left'}]}>
            {errorMessage}
          </Text>
        </View>
      )}
      defaultValue={defaultValue}
      name={name}
    />
  );
}
export default SingleCheckbox;
