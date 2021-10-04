import React from 'react';
import {View, StyleSheet, FlatList, Text, Image} from 'react-native';
import {
  PRODUCT_CATEGORIES_COLLECTION_PATH,
  useCollection,
} from 'src/hooks/firestoreHooks';
import {ProductCategory} from 'src/utils/interfaces';
import {colors, DEVICE_WIDTH} from 'src/utils/styles';
const styles = StyleSheet.create({
  containerStyle: {
    paddingHorizontal: 20,
    width: '100%',
  },
  itemContainer: {
    width: DEVICE_WIDTH / 2 - 10,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: 20,
  },
  image: {
    width: '100%',
    resizeMode: 'contain',
    height: 100,
  },
  categoryName: {
    fontSize: 16,
    padding: 10,
    fontWeight: '600',
    maxWidth: 120,
    textAlign: 'center',
  },
});

function ProductCategories() {
  const {collection} = useCollection({
    collectionPath: PRODUCT_CATEGORIES_COLLECTION_PATH,
  });
  return (
    <FlatList
      numColumns={2}
      contentContainerStyle={styles.containerStyle}
      keyExtractor={(item: ProductCategory) => item.id}
      data={collection}
      renderItem={({item}: {item: ProductCategory}) => {
        const image = item.photoUrl
          ? {uri: item.photoUrl}
          : require('assets/cart.png');
        return (
          <View style={styles.itemContainer}>
            <Image source={image} style={styles.image} />
            <Text numberOfLines={2} style={styles.categoryName}>
              {item.name}
            </Text>
          </View>
        );
      }}
    />
  );
}

export default ProductCategories;
