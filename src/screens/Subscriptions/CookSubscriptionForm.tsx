import React from 'react';
import {View, Text} from 'react-native';
import {useForm} from 'react-hook-form';
import Button from 'src/components/Button';
import GenderPicker from 'components/FormInputs/GenderPicker';
import ControllerInput from 'components/FormInputs/ControllerInput';
import TimeOfTheDayPicker from 'components/FormInputs/TimeOfTheDayPicker';
import SingleCheckbox from 'components/FormInputs/SingleCheckbox';
import WeekdayPicker from 'components/FormInputs/WeekdayPicker';
import LanguageSelector from 'components/FormInputs/LanguageSelector';
import {yupResolver} from '@hookform/resolvers/yup';
import {CookSubscriptionSchema, CookSubscriptionInterface} from './Schema';
import styles from './styles';

interface Props {
  onSubmit: (formData: CookSubscriptionInterface) => void;
  subscription: CookSubscriptionInterface;
}

const CookSubscriptionForm: React.FC<Props> = ({
  onSubmit,
  subscription,
}: Props) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(CookSubscriptionSchema),
    defaultValues: subscription,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cook Subscription Form</Text>
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
        errorMessage={errors?.peopleCount && 'Please enter a valid count'}
        name="peopleCount"
        showHintOnRight
        placeholder="Enter number of People"
        label="Number of People"
        hintIcon="users"
        control={control}
      />
      <SingleCheckbox
        name="washUtensils"
        control={control}
        label="Need Utensils Washing?"
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

export default CookSubscriptionForm;
