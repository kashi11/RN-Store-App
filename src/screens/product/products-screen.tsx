import {Products} from 'components/products/products';
import {useProducts} from 'hooks/use-products';
import React from 'react';
import {ActivityIndicator, SafeAreaView} from 'react-native';

export const ProductsScreen = (): JSX.Element => {
  const {data: products, error, isLoading} = useProducts('asc');
  return (
    <SafeAreaView>
      {isLoading && <ActivityIndicator style={{marginTop: 20}} />}
      <Products products={products || []} />
    </SafeAreaView>
  );
};
