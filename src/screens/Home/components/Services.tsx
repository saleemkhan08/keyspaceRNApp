import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  SERVICES_COLLECTION_PATH,
  useCollection,
} from 'src/hooks/firestoreHooks';
import {SUBSCRIPTION_SCREEN} from 'src/utils/constants';
import {Service} from 'src/utils/interfaces';
import {colors} from 'src/utils/styles';
const styles = StyleSheet.create({
  containerStyle: {},
  itemContainer: {
    backgroundColor: colors.white,
    margin: 10,
    borderRadius: 25,
    borderWidth: 1,
    height: 170,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderColor: colors.lightGrey,
  },
  image: {
    height: 100,
    width: 120,
    resizeMode: 'cover',
    borderRadius: 25,
    margin: 5,
    marginTop: 0,
  },
  serviceName: {
    height: 60,
    fontSize: 15,
    padding: 10,
    fontWeight: '600',
    maxWidth: 120,
    textAlign: 'center',
  },
  brandTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

function Services() {
  const {collection} = useCollection({
    collectionPath: SERVICES_COLLECTION_PATH,
    order: 'order',
  });
  const {navigate} = useNavigation();
  return (
    <FlatList
      horizontal
      contentContainerStyle={styles.containerStyle}
      keyExtractor={(item: Service) => item.id}
      data={collection}
      renderItem={({item}: {item: Service}) => (
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigate(SUBSCRIPTION_SCREEN, {service: item})}>
          <Text numberOfLines={2} style={styles.serviceName}>
            {item.name}
          </Text>
          <Image source={{uri: item.photoUrl}} style={styles.image} />
        </TouchableOpacity>
      )}
    />
  );
}

export default Services;
