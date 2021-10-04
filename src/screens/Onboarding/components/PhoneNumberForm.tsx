import React, {useRef} from 'react';
import {View, TouchableOpacity, Text, TextInput, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from 'src/utils/styles';
import {useForm, Controller} from 'react-hook-form';
import styles from '../styles';

interface Props {
  defaultValue?: number | undefined | null;
  onFocused: (isFocused: boolean) => void;
  onNumberSubmit: (phNumber: number) => void;
}
const PhoneNumberForm = ({defaultValue, onFocused, onNumberSubmit}: Props) => {
  const translation = useRef(new Animated.Value(0)).current;
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = ({phoneNo}: {phoneNo: number}) => {
    onNumberSubmit(phoneNo);
  };

  const translateX = translation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 30, -30],
  });
  const hasErrors = !!errors.phoneNo;

  const errorFeedback = () => {
    if (hasErrors) {
      Animated.sequence([
        Animated.timing(translation, {
          duration: 150,
          toValue: 2,
          useNativeDriver: true,
        }),
        Animated.timing(translation, {
          duration: 150,
          toValue: 0,
          useNativeDriver: true,
        }),
      ]).start();
    }
  };
  return (
    <View style={styles.formContainer}>
      <Animated.View
        style={[
          styles.inputContainer,
          {
            transform: [{translateX}],
            borderColor: hasErrors ? colors.red : colors.primary,
          },
        ]}>
        <View style={styles.inputLeftElement}>
          <Icon name="call-outline" size={25} color={colors.primary} />
          <Text style={styles.inputStartText}>+91</Text>
        </View>
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 10,
            maxLength: 10,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              onFocus={() => onFocused(true)}
              autoCompleteType="off"
              keyboardType="phone-pad"
              style={styles.input}
              onBlur={() => {
                onFocused(false);
                onBlur();
              }}
              onChangeText={onChange}
              value={value}
              placeholder=" - Enter your Number"
              placeholderTextColor={colors.darkGrey}
            />
          )}
          name="phoneNo"
          defaultValue={defaultValue}
        />
        <TouchableOpacity
          style={styles.submitNumber}
          onPress={() => {
            handleSubmit(onSubmit)();
            errorFeedback();
          }}>
          <Icon name="arrow-forward-outline" size={30} color={colors.white} />
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

PhoneNumberForm.defaultProps = {};

export default PhoneNumberForm;
