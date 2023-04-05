import {RouteProp} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {OtpScreen} from 'screens/auth/otp-screen';
import {SigninScreen} from 'screens/auth/signin-screen';
import {SignupScreen} from 'screens/auth/signup-screen';

export type AuthNavigationParams = {
  Signup: undefined;
  Otp: {
    redirectFrom: 'Signup' | 'Signin';
    token?: string;
  };
  Signin: undefined;
};

export type AuthNavigationStackProp<T extends keyof AuthNavigationParams> =
  NativeStackNavigationProp<AuthNavigationParams, T>;

const Stack = createNativeStackNavigator<AuthNavigationParams>();
export type AuthRouteProps<T extends keyof AuthNavigationParams> = RouteProp<
  AuthNavigationParams,
  T
>;

export const AuthNavigation = (): JSX.Element => {
  return (
    <Stack.Navigator initialRouteName="Signin">
      <Stack.Screen name="Signin" component={SigninScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Otp" component={OtpScreen} />
    </Stack.Navigator>
  );
};
