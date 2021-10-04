import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

import PhoneNumberForm from './PhoneNumberForm';
import OTPForm from './OTPForm';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {colors} from 'src/utils/styles';
import styles from '../styles';

interface Props {
  onLogin: () => void;
  onFocused: (isFocused: boolean) => void;
}
function PhoneAuth(props: Props) {
  const {onLogin, onFocused} = props;
  const [phoneNumber, setPhoneNumber] = useState<number>();
  const [showOtpInput, setShowOtpInput] = useState<boolean>(false);
  const [confirmation, setConfirmation] = useState<any>();
  const [otpError, setOtpError] = useState<boolean>(false);

  const handleNumber = async (phNumber: number) => {
    onFocused(false);
    setPhoneNumber(phNumber);
    setShowOtpInput(true);
    try {
      const confirm = await auth().signInWithPhoneNumber(`+91${phNumber}`);
      setConfirmation(confirm);
    } catch (error) {
      console.log('SalConfirmationFailed : >>>>>>>>>>', error);
    }
  };

  const sendOtp = () => {};

  const handleOTP = async (OTP: number) => {
    try {
      setOtpError(false);
      await confirmation.confirm(OTP);
      console.log('SalConfirmationSuccessful : >>>>>>>>>>');
      // onLogin();
    } catch (error) {
      setOtpError(true);
    }
  };

  if (showOtpInput) {
    return (
      <View style={styles.otpContainer}>
        <OTPForm
          onFocused={onFocused}
          onOTPSubmit={handleOTP}
          otpError={otpError}
        />
        <View style={styles.otpActions}>
          <TouchableOpacity
            onPress={() => setShowOtpInput(false)}
            style={styles.changeNumberButton}>
            <Icon name="arrow-back-outline" size={20} color={colors.primary} />
            <Text style={styles.otpActionText}>Change Number</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={sendOtp} style={styles.changeNumberButton}>
            <Icon name="repeat-outline" size={20} color={colors.primary} />
            <Text style={styles.otpActionText}>Resend OTP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
  return (
    <PhoneNumberForm
      onFocused={onFocused}
      onNumberSubmit={handleNumber}
      defaultValue={phoneNumber}
    />
  );
}

PhoneAuth.defaultProps = {};

export default PhoneAuth;
