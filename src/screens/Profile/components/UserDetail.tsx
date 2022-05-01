import React, {useState} from 'react';
import {Image, View, ScrollView, TouchableOpacity} from 'react-native';
import auth from '@react-native-firebase/auth';
import {useForm} from 'react-hook-form';
import {string, object} from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import Icon from 'react-native-vector-icons/Ionicons';

import Button from 'src/components/Button';
import {USER} from 'assets/images';
import ControllerInput from 'components/FormInputs/ControllerInput';
import {colors, fontSize} from 'src/utils/styles';
import styles from '../styles';

export const UserDetailSchema = object({
  displayName: string().required(),
  email: string().required(),
  phoneNumber: string(),
}).required();

function UserDetails() {
  const currentUser = auth().currentUser;
  const {displayName, email, phoneNumber, photoURL} = currentUser || {};
  const image = photoURL ? {uri: photoURL} : USER;
  const [edit, setEdit] = useState(false);
  const defaultValues = {
    displayName: displayName || undefined,
    email: email || undefined,
    phoneNumber: phoneNumber || undefined,
    photoURL: undefined,
  };

  const onSubmit = (values: any) => {
    setEdit(false);
    console.log('User details updated before', {values});
    currentUser?.updateProfile(values);
    currentUser?.updateEmail(values.email).catch(error => {
      console.log('Error updating email', error);
    });
  };

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(UserDetailSchema),
    defaultValues,
  });

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={styles.userDetailContainer}>
      {!edit && (
        <View style={styles.actionsContainer}>
          <TouchableOpacity onPress={() => setEdit(true)}>
            <Icon
              name="create-outline"
              size={fontSize.lg}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.imageContainer}>
        <Image source={image} style={styles.image} />
      </View>
      <ControllerInput
        disabled={!edit}
        errorMessage={errors?.displayName && 'Please enter a valid name'}
        label="Name"
        name="displayName"
        placeholder="Enter your full name"
        control={control}
      />
      <ControllerInput
        disabled={!edit}
        errorMessage={errors?.email && 'Please enter a valid email ID'}
        label="Email ID"
        name="email"
        placeholder="Enter your email ID"
        control={control}
      />
      <ControllerInput
        errorMessage={
          errors?.phoneNumber && 'Please enter a valid phone number'
        }
        label="Phone Number"
        name="phoneNumber"
        placeholder="Enter your phone number"
        control={control}
        disabled
      />
      {edit ? (
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      ) : (
        <Button
          title="Logout"
          textColor={colors.red}
          bgColor={colors.red}
          onPress={() => {
            auth().signOut();
          }}
        />
      )}
    </ScrollView>
  );
}

UserDetails.defaultProps = {};

export default UserDetails;
