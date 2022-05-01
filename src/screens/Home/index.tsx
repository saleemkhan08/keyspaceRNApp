import React from 'react';
import {
  Text,
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {NOTIFICATION_SCREEN} from 'src/utils/constants';
import {colors, fontSize} from 'src/utils/styles';
import RentCycle from './components/RentCycle';
import Services from './components/Services';

const HEADER_PADDING = 30;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.lighterGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  actionsContainer: {
    width: 60,
    paddingEnd: HEADER_PADDING,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  brandTitle: {
    fontSize: fontSize.lg,
    margin: HEADER_PADDING,
    fontWeight: 'bold',
    color: colors.primary,
  },
  sectionContainerStyle: {
    paddingBottom: 100,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    margin: 20,
    color: colors.secondary,
    marginBottom: 5,
  },
  prodctCategories: {
    height: 70,
    width: '100%',
    padding: 20,
    justifyContent: 'center',
  },
  productName: {
    fontSize: 18,
  },
});

interface Props {
  navigation: {navigate: (path: string) => void};
}

interface Section {
  title: string;
  isHorizontal: boolean;
  data: string[];
}

function HomeScreen({navigation}: Props) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.lightGrey} barStyle="dark-content" />
      <SafeAreaView style={styles.innerContainer}>
        <Text style={styles.brandTitle}>KeySpace</Text>
        <View style={styles.actionsContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate(NOTIFICATION_SCREEN)}>
            <Icon
              name="notifications-outline"
              size={fontSize.lg}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <RentCycle />
      <Services />
    </View>
  );
}

HomeScreen.defaultProps = {};

export default HomeScreen;
