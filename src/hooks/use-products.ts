import {useState} from 'react';
import {Toast} from 'react-native-toast-message/lib/src/Toast';
import {useQuery} from 'react-query';
import {getAllProducts} from 'services/product-service';
import {Product} from 'utils.ts/types';

export const useProducts = (sort: string) => {
  return useQuery<Product[], string>('products', () => getAllProducts(sort), {
    onError: (error: any) => {
      Toast.show({type: 'error', text1: error.message});
    },
  });
};
