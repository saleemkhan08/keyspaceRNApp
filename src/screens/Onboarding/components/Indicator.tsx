import React from 'react';
import {colors, DEVICE_WIDTH} from 'utils/styles';
import {Animated, StyleSheet, View} from 'react-native';
import Data from '../Data';

const styles = StyleSheet.create({
  indicator: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  indicatorDot: {
    margin: 5,
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },
});

const Indicator = ({scrollX}: any) => (
  <View style={styles.indicator}>
    {Data.map((item, i) => {
      const scale = scrollX.interpolate({
        inputRange: [
          (i - 1) * DEVICE_WIDTH,
          i * DEVICE_WIDTH,
          (i + 1) * DEVICE_WIDTH,
        ],
        outputRange: [0.8, 1.4, 0.8],
        extrapolate: 'clamp',
      });
      const opacity = scrollX.interpolate({
        inputRange: [
          (i - 1) * DEVICE_WIDTH,
          i * DEVICE_WIDTH,
          (i + 1) * DEVICE_WIDTH,
        ],
        outputRange: [0.6, 1, 0.6],
        extrapolate: 'clamp',
      });
      return (
        <Animated.View
          key={`indicator-${item.key}`}
          style={[
            styles.indicatorDot,
            {
              opacity,
              transform: [{scale}],
            },
          ]}
        />
      );
    })}
  </View>
);

export default Indicator;
