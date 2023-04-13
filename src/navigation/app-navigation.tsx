import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {ProductsScreen} from 'screens/product/products-screen';
import {Button} from 'react-native';
import {AppHeaderRight} from 'components/shared/app-header-right';
import {Product} from 'utils.ts/types';
import {ProductDetailsScreen} from 'screens/product/product-details-screen';
import {RouteProp} from '@react-navigation/native';

export type AppNavigationParams = {
  Products: undefined;
  ProductDetails: {
    product: Product;
  };
};

export type AppNavigationStackProp<T extends keyof AppNavigationParams> =
  NativeStackNavigationProp<AppNavigationParams, T>;

export type AppRouteProps<T extends keyof AppNavigationParams> = RouteProp<
  AppNavigationParams,
  T
>;

const Stack = createNativeStackNavigator<AppNavigationParams>();

export const AppNavigation = (): JSX.Element => {
  return (
    <Stack.Navigator
      initialRouteName="Products"
      screenOptions={{headerRight: props => <AppHeaderRight {...props} />}}>
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen
        name="ProductDetails"
        options={{title: 'Product Detail'}}
        component={ProductDetailsScreen}
      />
    </Stack.Navigator>
  );
};
