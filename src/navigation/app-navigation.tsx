import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {ProductsScreen} from 'screens/product/products-screen';
import {Button} from 'react-native';
import {AppHeaderRight} from 'components/shared/app-header-right';
import {Product} from 'utils.ts/types';
import { ProductDetailScreen } from 'screens/product/product-detail-screen';

export type AppNavigationParams = {
  Products: undefined;
  ProductDetail: {
    product: Product;
  };
};

export type AppNavigationStackProp<T extends keyof AppNavigationParams> =
  NativeStackNavigationProp<AppNavigationParams, T>;

const Stack = createNativeStackNavigator<AppNavigationParams>();

export const AppNavigation = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="Products"
      screenOptions={{headerRight: props => <AppHeaderRight {...props} />}}>
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
};
