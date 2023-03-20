import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignupScreen} from 'screens/auth/signup-screen';
const Stack = createNativeStackNavigator();

export const AuthNavigation = (): JSX.Element => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};
