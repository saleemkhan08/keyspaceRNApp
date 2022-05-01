import React from 'react';
import {View} from 'react-native';
import OwnerProfile from './OwnerProfile';

interface Props {}
function index(props: Props) {
  const {} = props;
  return (
    <View>
      <OwnerProfile />
    </View>
  );
}

index.defaultProps = {};

export default index;
