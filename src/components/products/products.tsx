import React from 'react';
import {Product} from 'utils.ts/types';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
interface IProducts {
  products: Product[];
}

export const Products = ({products}: IProducts): JSX.Element => {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        {products.map(product => (
          <View
            style={styles.productCard}
            id={`${product.id}`}
            key={product.id}>
            <Image source={{uri: product.image, width: 100}} />
            <View style={styles.productDetails}>
              <Text style={{fontWeight: '700'}}>{product.title}</Text>
              <Text numberOfLines={4}>{product.description}</Text>
              <Text style={{fontWeight: '700'}}>${product.price}</Text>
            </View>
          </View>
        ))}
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    padding: 24,
    gap: 16,
  },
  productCard: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    gap: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 20,
    elevation: 4,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },

  productDetails: {
    width: 0,
    flexGrow: 1,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
  },
  productDescription: {
    flexShrink: 1,
  },
});
