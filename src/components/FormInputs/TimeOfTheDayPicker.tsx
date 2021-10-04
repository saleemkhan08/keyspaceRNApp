import React from 'react';
import {Controller} from 'react-hook-form';
import CheckBoxGroup from 'components/FormInputs/CheckBoxGroup';
import {View, Text, StyleSheet} from 'react-native';
import commonStyles from './styles';
import {colors} from 'src/utils/styles';

const styles = StyleSheet.create({
  label: {
    ...commonStyles.label,
    marginBottom: 5,
  },
});

interface Props {
  control: any;
  name: string;
  defaultValue?: string[];
  label: string;
  errorMessage?: string;
}
function TimeOfTheDayPicker(props: Props) {
  const {control, name, defaultValue, label, errorMessage} = props;
  const dynamicColor = errorMessage ? colors.red : colors.darkBlue;
  // TODO implement time picker for each time of the day
  return (
    <Controller
      control={control}
      render={({field: {onChange, value}}) => (
        <View>
          <Text style={styles.label}>{label}</Text>
          <CheckBoxGroup
            color={dynamicColor}
            items={[
              {text: 'Morning', id: 'morning'},
              {text: 'Afternoon', id: 'afternoon'},
              {text: 'Evening', id: 'evening'},
            ]}
            onItemSelected={onChange}
            selectedIds={value}
          />
          <Text style={commonStyles.error}>{errorMessage}</Text>
        </View>
      )}
      name={name}
      defaultValue={defaultValue}
    />
  );
}

TimeOfTheDayPicker.defaultProps = {
  defaultValue: [],
};

export default TimeOfTheDayPicker;
