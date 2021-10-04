import React from 'react';
import TypePicker from './TypePicker';

interface Props {
  control: any;
  name: string;
  defaultValue?: string;
}
function GenderPicker(props: Props) {
  const {control, name, defaultValue} = props;
  return (
    <TypePicker
      control={control}
      types={[
        {text: 'Male', id: 'male'},
        {text: 'Female', id: 'female'},
        {text: 'Either', id: 'either'},
      ]}
      name={name}
      defaultValue={defaultValue}
      title="Gender"
    />
  );
}

GenderPicker.defaultProps = {
  defaultValue: 'either',
};

export default GenderPicker;
