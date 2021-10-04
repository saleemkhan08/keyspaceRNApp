import React from 'react';
import {
  Text,
  StyleSheet,
  StatusBar,
  View,
  TouchableOpacity,
  SafeAreaView,
  SectionList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {CART_SCREEN, NOTIFICATION_SCREEN} from 'src/utils/constants';
import {colors, fontSize} from 'src/utils/styles';
import ProductCategories from './components/ProductCategories';
import Services from './components/Services';
import SubscriptionDetails from './components/SubscriptionDetails';

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
    width: 110,
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

const SECTIONS = [
  {
    data: [],
    type: 'SUBSCRIPTION_DETAILS',
  },
  {
    data: [],
    title: 'Services',
    type: 'SERVICES',
  },
  {
    data: [],
    title: 'Product Categories',
    type: 'PRODUCT_CATEGORIES',
  },
];

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
          <TouchableOpacity onPress={() => navigation.navigate(CART_SCREEN)}>
            <Icon
              name="cart-outline"
              size={fontSize.lg}
              color={colors.primary}
            />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <SectionList<any>
        contentContainerStyle={styles.sectionContainerStyle}
        stickySectionHeadersEnabled={false}
        sections={SECTIONS}
        renderSectionHeader={({section}) => (
          <>
            {section.title && (
              <Text style={styles.sectionTitle}>{section.title}</Text>
            )}
            {section.type === 'SERVICES' && <Services />}
            {section.type === 'SUBSCRIPTION_DETAILS' && <SubscriptionDetails />}
            {section.type === 'PRODUCT_CATEGORIES' && <ProductCategories />}
          </>
        )}
        renderItem={() => null}
      />
    </View>
  );
}

HomeScreen.defaultProps = {};

export default HomeScreen;
