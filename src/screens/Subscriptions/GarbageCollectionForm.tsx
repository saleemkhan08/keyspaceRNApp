import React from 'react';
import {View, Text} from 'react-native';
import {useForm} from 'react-hook-form';
import Button from 'src/components/Button';
import GenderPicker from 'components/FormInputs/GenderPicker';
import ControllerInput from 'components/FormInputs/ControllerInput';
import TimeOfTheDayPicker from 'components/FormInputs/TimeOfTheDayPicker';
import WeekdayPicker from 'components/FormInputs/WeekdayPicker';
import LanguageSelector from 'components/FormInputs/LanguageSelector';
import {yupResolver} from '@hookform/resolvers/yup';
import {GarbageCollectionInterface, GarbageCollectionSchema} from './Schema';
import styles from './styles';

interface Props {
  onSubmit: (formData: GarbageCollectionInterface) => void;
  subscription: GarbageCollectionInterface;
}

const GarbageCollectionForm: React.FC<Props> = ({
  onSubmit,
  subscription,
}: Props) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(GarbageCollectionSchema),
    defaultValues: subscription,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Garbage Collection Form</Text>
      <GenderPicker name="gender" control={control} />
      <ControllerInput
        errorMessage={errors?.budget && 'Please enter a valid budget'}
        label="Budget"
        name="budget"
        placeholder="Enter your budget"
        control={control}
        hintText="₹"
        showHintOnLeft
      />
      <LanguageSelector
        errorMessage={errors?.preferredLanguage && 'Please select at least 2'}
        name="preferredLanguage"
        control={control}
      />
      <TimeOfTheDayPicker
        errorMessage={errors?.timeOfTheDay && 'Please select at least 1'}
        label="Time of day"
        name="timeOfTheDay"
        control={control}
      />
      <WeekdayPicker
        errorMessage={errors?.dryGarbage && 'Please select at least 1'}
        label="Dry Garbage"
        name="dryGarbage"
        control={control}
      />
      <WeekdayPicker
        errorMessage={errors?.wetGarbage && 'Please select at least 1'}
        label="Wet Garbage"
        name="wetGarbage"
        control={control}
      />
      <WeekdayPicker
        errorMessage={errors?.otherGarbage && 'Please select at least 1'}
        label="Other Garbage"
        name="otherGarbage"
        control={control}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default GarbageCollectionForm;
