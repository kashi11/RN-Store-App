import React from 'react';
import {Product} from 'utils.ts/types';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

interface IProduct {
  product: Product;
}

export const ProductDetails = ({product}: IProduct): JSX.Element => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text style={{fontWeight: '700'}}>{product.title}</Text>
          <Text style={{textTransform: 'uppercase'}}>{product.category}</Text>
        </View>
        <Image source={{uri: product.image}} style={styles.image} />
        <View style={styles.productDetails}>
          <Text>{product.description}</Text>
          <Text style={{fontWeight: '700'}}>${product.price}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    gap: 20,
    backgroundColor: 'white',
    margin: 16,
    padding: 16,
    borderRadius: 8,
  },
  image: {
    height: 300,
    resizeMode: 'contain',
    width: '100%',
  },
  productDetails: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  productDescription: {
    flexShrink: 1,
  },
});
