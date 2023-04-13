import {useNavigation} from '@react-navigation/native';
import {ProductList} from 'components/products/product-list';
import {useProducts} from 'hooks/use-products';
import {AppNavigationStackProp} from 'navigation/app-navigation';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Product} from 'utils.ts/types';

export const ProductsScreen = (): JSX.Element => {
  const [sortBy, setSortBy] = useState<'asc' | 'desc'>('asc');
  const {data: products, isLoading, refetch, isRefetching} = useProducts(sortBy);
  const navigation = useNavigation<AppNavigationStackProp<'Products'>>();

  const handleClick = (product: Product) => {
    navigation.navigate('ProductDetails', {product});
  };

  const handleSortChange = (value: 'asc' | 'desc') => {
    setSortBy(value);
  };

  return (
    <SafeAreaView>
      <ProductList
        onProductClick={handleClick}
        loading={isLoading}
        onSortChange={handleSortChange}
        isRefetching={isRefetching}
        onRefresh={refetch}
        sortBy={sortBy}
        products={products || []}
      />
    </SafeAreaView>
  );
};
