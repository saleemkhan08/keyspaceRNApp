import React from 'react';
import {Button, View} from 'react-native';
import auth from '@react-native-firebase/auth';
interface Props {}
function index(props: Props) {
  const {} = props;
  return (
    <View style={{margin: 100}}>
      <Button
        title="Logout"
        onPress={() => {
          auth().signOut();
        }}
      />
    </View>
  );
}

index.defaultProps = {};

export default index;
