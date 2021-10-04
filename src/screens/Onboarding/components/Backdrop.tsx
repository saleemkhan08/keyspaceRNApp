import React from 'react';
import {DEVICE_WIDTH} from 'utils/styles';
import {Animated, StyleSheet} from 'react-native';
import Data from '../Data';

const Backdrop = ({scrollX}: any) => {
  const bg = scrollX.interpolate({
    inputRange: Data.map((_, i) => i * DEVICE_WIDTH),
    outputRange: Data.map(item => item.bgColor),
  });
  return (
    <Animated.View
      style={[StyleSheet.absoluteFillObject, {backgroundColor: bg}]}
    />
  );
};

export default Backdrop;
