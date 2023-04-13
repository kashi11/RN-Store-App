import {useRoute} from '@react-navigation/native';
import {ProductDetails} from 'components/products/product-details';
import {AppRouteProps} from 'navigation/app-navigation';
import React from 'react';

export const ProductDetailsScreen = (): JSX.Element => {
  const {
    params: {product},
  } = useRoute<AppRouteProps<'ProductDetails'>>();

  console.log(product)

  return <ProductDetails product={product} />;
};
