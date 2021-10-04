import React from 'react';
import {View, Text} from 'react-native';
import {useForm} from 'react-hook-form';
import Button from 'src/components/Button';
import ControllerInput from 'components/FormInputs/ControllerInput';
import TimeOfTheDayPicker from 'components/FormInputs/TimeOfTheDayPicker';
import WeekdayPicker from 'components/FormInputs/WeekdayPicker';
import {yupResolver} from '@hookform/resolvers/yup';
import {
  WaterCanSubscriptionSchema,
  WaterCanSubscriptionInterface,
} from './Schema';
import styles from './styles';
import TypePicker from 'components/FormInputs/TypePicker';

interface Props {
  onSubmit: (formData: WaterCanSubscriptionInterface) => void;
  subscription: WaterCanSubscriptionInterface;
}

const WaterCanSubscriptionForm: React.FC<Props> = ({
  onSubmit,
  subscription,
}: Props) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
    watch,
  } = useForm({
    resolver: yupResolver(WaterCanSubscriptionSchema),
    defaultValues: subscription,
  });

  const typeOfSupply = watch('typeOfSupply');
  const repeat = watch('repeat');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Water Subscription Form</Text>
      <ControllerInput
        errorMessage={errors?.budget && 'Please enter a valid budget'}
        label="Budget"
        name="budget"
        placeholder="Enter your budget"
        control={control}
        hintText="₹"
        showHintOnLeft
      />
      <TypePicker
        control={control}
        types={[
          {text: '20L Can', id: 'can'},
          {text: 'Tanker', id: 'tanker'},
        ]}
        name="typeOfSupply"
        defaultValue="can"
        title="Type"
      />
      {typeOfSupply === 'tanker' && (
        <TypePicker
          control={control}
          types={[
            {text: 'Small', id: 'small'},
            {text: 'Medium', id: 'medium'},
            {text: 'Big', id: 'big'},
          ]}
          name="tankerSize"
          defaultValue="medium"
          title="Tanker Size"
        />
      )}
      <TimeOfTheDayPicker
        errorMessage={errors?.timeOfTheDay && 'Please select at least 1'}
        label="Time of day"
        name="timeOfTheDay"
        control={control}
      />
      <TypePicker
        control={control}
        types={[
          {text: 'Once', id: 'once'},
          {text: 'Weekly', id: 'weekly'},
        ]}
        name="repeat"
        defaultValue="once"
        title="Repeat"
      />
      {repeat === 'weekly' && (
        <WeekdayPicker
          errorMessage={errors?.weekday && 'Please select at least 1'}
          label="Days of Week"
          name="weekday"
          control={control}
        />
      )}
      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default WaterCanSubscriptionForm;
