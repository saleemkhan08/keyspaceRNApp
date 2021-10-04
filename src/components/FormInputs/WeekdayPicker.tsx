import React from 'react';
import {Controller} from 'react-hook-form';
import TextCheckBoxGroup from 'components/FormInputs/TextCheckBoxGroup';

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

function WeekdayPicker(props: Props) {
  const {control, name, defaultValue, label, errorMessage} = props;
  const dynamicColor = errorMessage ? colors.red : colors.darkBlue;
  return (
    <Controller
      control={control}
      render={({field: {onChange, value}}) => (
        <View>
          <Text style={styles.label}>{label}</Text>
          <TextCheckBoxGroup
            color={dynamicColor}
            verticalItem
            items={[
              {text: 'M', id: 'MON'},
              {text: 'T', id: 'TUE'},
              {text: 'W', id: 'WED'},
              {text: 'T', id: 'THU'},
              {text: 'F', id: 'FRI'},
              {text: 'S', id: 'SAT'},
              {text: 'S', id: 'SUN'},
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

WeekdayPicker.defaultProps = {
  defaultValue: [],
};

export default WeekdayPicker;
