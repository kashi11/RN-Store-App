import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {Home} from 'screens/home';

export type AppNavigationParams = {
  Home: undefined;
};

export type AuthNavigationStackProp<T extends keyof AppNavigationParams> =
  NativeStackNavigationProp<AppNavigationParams, T>;

const Stack = createNativeStackNavigator<AppNavigationParams>();

export const AppNavigation = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
