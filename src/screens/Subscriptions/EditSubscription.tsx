import {useNavigation} from '@react-navigation/native';
import {SUBSCRIPTION_REQUESTS, useDocument} from 'hooks/firestoreHooks';
import React, {useContext} from 'react';
import {ActivityIndicator, ScrollView} from 'react-native';
import {AuthContext} from 'src/utils/AuthProvider';
import {PROFILE_TAB} from 'src/utils/constants';
import {Service} from 'src/utils/interfaces';
import MaidSubscriptionForm from './MaidSubscriptionForm';
import CookSubscriptionForm from './CookSubscriptionForm';
import {
  CookSubscriptionInterface,
  GarbageCollectionInterface,
  MaidSubscriptionInterface,
  NannySubscriptionInterface,
  NurseSubscriptionInterface,
  TutorSubscriptionInterface,
  WaterCanSubscriptionInterface,
} from './Schema';
import TutorSubscriptionForm from './TutorSubscriptionForm';
import NannySubscriptionForm from './NannySubscriptionForm';
import NurseSubscriptionForm from './NurseSubscriptionForm';
import WaterCanSubscriptionForm from './WaterCanSubscriptionForm';
import GarbageCollectionForm from './GarbageCollectionForm';
interface Props {
  route: {params: {service: Service}};
}
function EditSubscription({route}: Props) {
  const {service} = route?.params || {};
  const {navigate} = useNavigation();
  const {user} = useContext(AuthContext);
  const docId = `${user?.uid}-${service.id}`;
  const {
    data: subscription,
    isLoading,
    updateDoc,
  } = useDocument(`${SUBSCRIPTION_REQUESTS}/${docId}`);

  const handleSubmit = (formData: object) => {
    updateDoc({
      ...formData,
      uid: user?.uid,
      serviceId: service.id,
    });
    navigate(PROFILE_TAB);
  };
  let SubscriptionForm;
  switch (service.order) {
    case '1':
      SubscriptionForm = () => (
        <MaidSubscriptionForm
          onSubmit={handleSubmit}
          subscription={subscription as MaidSubscriptionInterface}
        />
      );
      break;
    case '2':
      SubscriptionForm = () => (
        <CookSubscriptionForm
          onSubmit={handleSubmit}
          subscription={subscription as CookSubscriptionInterface}
        />
      );
      break;
    case '3':
      SubscriptionForm = () => (
        <TutorSubscriptionForm
          onSubmit={handleSubmit}
          subscription={subscription as TutorSubscriptionInterface}
        />
      );
      break;
    case '4':
      SubscriptionForm = () => (
        <NannySubscriptionForm
          onSubmit={handleSubmit}
          subscription={subscription as NannySubscriptionInterface}
        />
      );
      break;
    case '5':
      SubscriptionForm = () => (
        <NurseSubscriptionForm
          onSubmit={handleSubmit}
          subscription={subscription as NurseSubscriptionInterface}
        />
      );
      break;
    case '6':
      SubscriptionForm = () => (
        <WaterCanSubscriptionForm
          onSubmit={handleSubmit}
          subscription={subscription as WaterCanSubscriptionInterface}
        />
      );
      break;
    case '7':
      SubscriptionForm = () => (
        <GarbageCollectionForm
          onSubmit={handleSubmit}
          subscription={subscription as GarbageCollectionInterface}
        />
      );
      break;
    default:
      SubscriptionForm = () => (
        <MaidSubscriptionForm
          onSubmit={handleSubmit}
          subscription={subscription as MaidSubscriptionInterface}
        />
      );
  }
  return (
    <ScrollView>
      {isLoading ? <ActivityIndicator /> : <SubscriptionForm />}
    </ScrollView>
  );
}

EditSubscription.defaultProps = {};

export default EditSubscription;
