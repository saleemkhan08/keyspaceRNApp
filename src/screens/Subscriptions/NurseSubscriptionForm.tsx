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
import {NurseSubscriptionInterface, NurseSubscriptionSchema} from './Schema';
import styles from './styles';

interface Props {
  onSubmit: (formData: NurseSubscriptionInterface) => void;
  subscription: NurseSubscriptionInterface;
}

const NurseSubscriptionForm: React.FC<Props> = ({
  onSubmit,
  subscription,
}: Props) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(NurseSubscriptionSchema),
    defaultValues: subscription,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nurse Subscription Form</Text>
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
      <ControllerInput
        errorMessage={errors?.patientsAge && 'Please enter a valid age'}
        name="patientsAge"
        showHintOnRight
        placeholder="Enter patients age"
        label="Patients Age"
        hintText="YRS"
        control={control}
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
        errorMessage={errors?.weekday && 'Please select at least 1'}
        label="Days of Week"
        name="weekday"
        control={control}
      />
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default NurseSubscriptionForm;
