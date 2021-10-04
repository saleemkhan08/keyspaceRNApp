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
import {NannySubscriptionInterface, NannySubscriptionSchema} from './Schema';
import styles from './styles';

interface Props {
  onSubmit: (formData: NannySubscriptionInterface) => void;
  subscription: NannySubscriptionInterface;
}

const NannySubscriptionForm: React.FC<Props> = ({
  onSubmit,
  subscription,
}: Props) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(NannySubscriptionSchema),
    defaultValues: subscription,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Nanny Subscription Form</Text>
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
        errorMessage={errors?.childsAge && 'Please enter a valid age'}
        name="childsAge"
        showHintOnRight
        placeholder="Enter childs age"
        label="Child's age"
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

export default NannySubscriptionForm;
