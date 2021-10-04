/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Platform, Animated, StyleSheet} from 'react-native';
import {USER_SCREENS} from 'src/utils/constants';
import {colors, DEVICE_HEIGHT, DEVICE_WIDTH} from 'src/utils/styles';
import Data from '../Data';
import Indicator from './Indicator';
import PhoneAuth from './PhoneAuth';
interface Props {
  scrollX: Animated.Value;
  navigate: (path: string) => void;
}

const styles = StyleSheet.create({
  container: {
    height: 175,
    padding: 20,
    width: '100%',
    position: 'absolute',
    justifyContent: 'flex-start',
    bottom: 0,
  },
  circle: {
    position: 'absolute',
    width: DEVICE_HEIGHT,
    height: DEVICE_HEIGHT,
    borderRadius: DEVICE_HEIGHT / 2,
    bottom: -DEVICE_HEIGHT * 0.79,
    left: -DEVICE_HEIGHT * 0.27,
  },
});

function StaticBox({scrollX, navigate}: Props) {
  const [focused, setFocused] = useState(false);
  const bg = scrollX.interpolate({
    inputRange: Data.map((_, i) => i * DEVICE_WIDTH),
    outputRange: Data.map(item => `${item.bgColor}88`),
  });
  return (
    <View
      style={[
        styles.container,
        {
          // TODO use keyboard height
          bottom: Platform.OS === 'ios' && focused ? 280 : 0,
        },
      ]}>
      <Animated.View
        style={[styles.circle, {backgroundColor: focused ? bg : 'transparent'}]}
      />
      <PhoneAuth
        onFocused={isFocused => {
          setFocused(isFocused);
        }}
        onLogin={() => navigate(USER_SCREENS)}
      />
      <Indicator scrollX={scrollX} />
    </View>
  );
}

StaticBox.defaultProps = {};

export default StaticBox;
