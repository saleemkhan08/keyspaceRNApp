/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef} from 'react';
import {View, TouchableOpacity, TextInput, Animated} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from 'src/utils/styles';
import {useForm, Controller} from 'react-hook-form';
import styles from '../styles';

interface Props {
  onFocused: (isFocused: boolean) => void;
  onOTPSubmit: (phNumber: number) => void;
  otpError: boolean;
}
const OTPForm = ({onFocused, onOTPSubmit, otpError}: Props) => {
  const translation = useRef(new Animated.Value(0)).current;
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = ({otp}: {otp: number}) => {
    onOTPSubmit(otp);
  };
  useEffect(() => {
    errorFeedback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [otpError]);

  const translateX = translation.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, 30, -30],
  });
  const hasErrors = !!errors.otp;

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
    <View style={[styles.formContainer, {marginBottom: 10}]}>
      <Animated.View
        style={[
          styles.inputContainer,
          {
            transform: [{translateX}],
            borderColor: hasErrors ? colors.red : colors.primary,
          },
        ]}>
        <View style={styles.inputLeftElement}>
          <Icon
            name="chatbox-ellipses-outline"
            size={25}
            color={colors.primary}
          />
        </View>
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 6,
            maxLength: 6,
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              onFocus={() => onFocused(true)}
              autoCompleteType="off"
              keyboardType="phone-pad"
              style={[styles.input, {paddingStart: 5}]}
              onBlur={() => {
                onFocused(false);
                onBlur();
              }}
              onChangeText={onChange}
              value={value}
              placeholder="Enter the OTP"
              placeholderTextColor={colors.darkGrey}
            />
          )}
          name="otp"
          defaultValue=""
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

OTPForm.defaultProps = {};

export default OTPForm;
