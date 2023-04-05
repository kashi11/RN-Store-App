import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {OtpScreen} from 'screens/auth/otp-screen';
import {SignupScreen} from 'screens/auth/signup-screen';

export type AuthNavigationParams = {
  Signup: undefined;
  Otp: undefined;
};

export type AuthNavigationStackProp<T extends keyof AuthNavigationParams> =
  NativeStackNavigationProp<AuthNavigationParams, T>;

const Stack = createNativeStackNavigator<AuthNavigationParams>();

export const AuthNavigation = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Otp" component={OtpScreen} />
    </Stack.Navigator>
  );
};
