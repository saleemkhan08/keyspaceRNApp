import React from 'react';
import {Controller} from 'react-hook-form';
import BubbleSelector from './BubbleSelector';
import {View, Text} from 'react-native';
import commonStyles from './styles';
import {colors} from 'src/utils/styles';

interface Props {
  control: any;
  name: string;
  defaultValue?: string[];
  errorMessage?: string;
}
function LanguageSelector(props: Props) {
  const {control, name, defaultValue, errorMessage} = props;

  const dynamicColor = errorMessage ? colors.red : colors.darkBlue;

  // Pick the languages from available associates
  return (
    <Controller
      control={control}
      render={({field: {onChange, value}}) => (
        <View>
          <Text style={commonStyles.label}>Preferred Language</Text>
          <BubbleSelector
            color={dynamicColor}
            items={[
              {text: 'English', id: 'english'},
              {text: 'Kannada', id: 'kannada'},
              {text: 'Hindi', id: 'hindi'},
              {text: 'Tamil', id: 'tamil'},
              {text: 'Telugu', id: 'telugu'},
              {text: 'Malayalam', id: 'malayalam'},
              {text: 'Gujrati', id: 'gujrati'},
              {text: 'Marthi', id: 'marthi'},
              {text: 'Punjabi', id: 'punjabi'},
              {text: 'Assamese', id: 'assamese'},
              {text: 'Bengali', id: 'bengali'},
              {text: 'Oriya', id: 'oriya'},
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

LanguageSelector.defaultProps = {
  defaultValue: [],
};

export default LanguageSelector;
