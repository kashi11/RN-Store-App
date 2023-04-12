import {useNavigation} from '@react-navigation/native';
import {ProductList} from 'components/products/product-list';
import {useProducts} from 'hooks/use-products';
import {AppNavigationStackProp} from 'navigation/app-navigation';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Product} from 'utils.ts/types';

export const ProductsScreen = (): JSX.Element => {
  const {data: products, isLoading, refetch, isRefetching} = useProducts('asc');
  const navigation = useNavigation<AppNavigationStackProp<'Products'>>();

  const handleClick = (product: Product) => {
    navigation.navigate('ProductDetail', {product});
  };

  return (
    <SafeAreaView>
      <ProductList
        onProductClick={handleClick}
        loading={isLoading}
        isRefetching={isRefetching}
        onRefresh={refetch}
        products={products || []}
      />
    </SafeAreaView>
  );
};
