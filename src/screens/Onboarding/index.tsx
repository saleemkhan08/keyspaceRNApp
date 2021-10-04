import React, {useContext, useRef} from 'react';
import {Animated, Image, View} from 'react-native';
import {StatusBar} from 'react-native';

import {colors} from 'src/utils/styles';

import Backdrop from './components/Backdrop';
import styles from './styles';
import Data from './Data';
import StaticBox from './components/StaticBox';
import SingleSlide from './components/SingleSlide';
import {AuthContext} from 'src/utils/AuthProvider';

interface Props {
  navigation: {navigate: (path: string) => void};
}
function OnboardingScreen({navigation}: Props) {
  const {navigate} = navigation;
  const scrollX = useRef(new Animated.Value(0)).current;
  const {isLoading} = useContext(AuthContext);
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
      <Backdrop scrollX={scrollX} />
      <View style={[styles.circle]} />
      <View style={styles.logoContainer}>
        <Image
          source={require('../../../assets/keyspace2f2f2f.png')}
          style={styles.logo}
        />
      </View>
      <Animated.FlatList
        data={Data}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {x: scrollX},
              },
            },
          ],
          {useNativeDriver: false},
        )}
        renderItem={({item}) => <SingleSlide {...item} />}
        keyExtractor={item => item.key}
      />
      {!isLoading && <StaticBox scrollX={scrollX} navigate={navigate} />}
    </View>
  );
}

OnboardingScreen.defaultProps = {};

export default OnboardingScreen;
