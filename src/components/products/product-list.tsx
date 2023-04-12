import React from 'react';
import {Product} from 'utils.ts/types';
import {FlatList, TouchableHighlight, View} from 'react-native';
import {ProductItem} from './product-item';
interface IProducts {
  products: Product[];
  onProductClick: (product: Product) => void;
  onRefresh: () => void;
  isRefetching: boolean;
  loading: boolean;
}

export const ProductList = ({
  products,
  onProductClick,
  onRefresh,
  isRefetching,
  loading,
}: IProducts): JSX.Element => {
  return (
    <FlatList
      ItemSeparatorComponent={() => <View style={{height: 12}}></View>}
      contentContainerStyle={{padding: 16}}
      data={products}
      onRefresh={onRefresh}
      refreshing={isRefetching || loading}
      renderItem={({item}) => (
        <TouchableHighlight
          key={item.id}
          onPress={() => onProductClick(item)}
          style={{borderRadius: 8}}>
          <View>
            <ProductItem product={item} />
          </View>
        </TouchableHighlight>
      )}
    />
  );
};
