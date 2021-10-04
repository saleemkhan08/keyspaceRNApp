import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {colors, DEVICE_HEIGHT, DEVICE_WIDTH} from 'src/utils/styles';
const styles = StyleSheet.create({
  sliderContainer: {
    alignItems: 'center',
    padding: 20,
    width: DEVICE_WIDTH,
    height: DEVICE_HEIGHT,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    resizeMode: 'contain',
    width: DEVICE_WIDTH / 2,
    height: DEVICE_HEIGHT / 2,
  },
  bottomContainer: {
    height: 100,
    justifyContent: 'flex-end',
  },
  title: {
    color: colors.primary,
    marginBottom: 10,
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
  },
  description: {
    fontWeight: '300',
    fontSize: 16,
    color: colors.primary,
    textAlign: 'center',
  },
  staticContainerPlaceholder: {
    height: 200,
    width: '100%',
  },
});
interface Props {
  title: string;
  image: any;
  textColor: string;
  description: string;
}
const SingleSlide = ({title, image, textColor, description}: Props) => (
  <View style={styles.sliderContainer}>
    <View style={styles.imageContainer}>
      <Image style={styles.image} source={image} />
    </View>
    <View style={styles.bottomContainer}>
      <Text style={[styles.title, {color: textColor}]}>{title}</Text>
      <Text style={[styles.description, {color: textColor}]}>
        {description}
      </Text>
    </View>
    <View style={styles.staticContainerPlaceholder} />
  </View>
);

export default SingleSlide;
