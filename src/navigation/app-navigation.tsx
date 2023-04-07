import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {ProductsScreen} from 'screens/product/products-screen';
import {Button} from 'react-native';
import { AppHeaderRight } from 'components/shared/app-header-right';

export type AppNavigationParams = {
  Products: undefined;
};

export type AuthNavigationStackProp<T extends keyof AppNavigationParams> =
  NativeStackNavigationProp<AppNavigationParams, T>;

const Stack = createNativeStackNavigator<AppNavigationParams>();

export const AppNavigation = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName="Products">
      <Stack.Screen
        options={{headerRight: (props)=><AppHeaderRight {...props} />}}
        name="Products"
        component={ProductsScreen}
      />
    </Stack.Navigator>
  );
};
