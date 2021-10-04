import React from 'react';
import RadioGroup from 'components/FormInputs/RadioGroup';
import {View, Text} from 'react-native';
import commonStyles from './styles';
import {Controller} from 'react-hook-form';

interface Props {
  control: any;
  name: string;
  defaultValue?: string;
  title: string;
  types: {text: string; id: string}[];
}
function TypePicker(props: Props) {
  const {control, name, defaultValue, types, title} = props;
  return (
    <Controller
      control={control}
      render={({field: {onChange, value}}) => (
        <View>
          <Text style={commonStyles.label}>{title}</Text>
          <RadioGroup
            items={types}
            onItemSelected={onChange}
            selectedId={value}
          />
        </View>
      )}
      name={name}
      defaultValue={defaultValue}
    />
  );
}

export default TypePicker;
