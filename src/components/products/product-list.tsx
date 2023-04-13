import React from 'react';
import {Product} from 'utils.ts/types';
import {FlatList, Switch, Text, TouchableHighlight, View} from 'react-native';
import {ProductItem} from './product-item';
interface IProducts {
  products: Product[];
  onProductClick: (product: Product) => void;
  onRefresh: () => void;
  isRefetching: boolean;
  loading: boolean;
  sortBy: 'asc' | 'desc';
  onSortChange: (value: 'asc' | 'desc') => void;
}

export const ProductList = ({
  products,
  onProductClick,
  onRefresh,
  isRefetching,
  loading,
  onSortChange,
  sortBy,
}: IProducts): JSX.Element => {
  return (
    <FlatList
      ListHeaderComponent={() => (
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            padding: 8,
            gap: 2
          }}>
          <Text>Sort by: Asc</Text>
          <Switch
            value={sortBy === 'desc'}
            onValueChange={value => {
              if (value) onSortChange('desc');
              else onSortChange('asc');
            }}></Switch>
            <Text>Desc</Text>
        </View>
      )}
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
