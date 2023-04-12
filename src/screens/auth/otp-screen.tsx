import {useNavigation, useRoute} from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {useAuthStore} from 'hooks/store/use-auth-store';
import {AuthRouteProps} from 'navigation/auth-navigation';
import {useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {verifyOtp} from 'services/phone-service';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {useMutation} from 'react-query';
import {createUser, signin} from 'services/user-service';
import {User} from 'utils.ts/types';

type SignUp = Required<User>;

export const OtpScreen = () => {
  const {user, setToken} = useAuthStore();
  const {setItem} = useAsyncStorage('token');
  const [invalidCode, setInvalidCode] = useState(false);
  const {
    params: {redirectFrom, token},
  } = useRoute<AuthRouteProps<'Otp'>>();
  const mutation = useMutation({
    mutationFn: (user: Required<User>) => {
      return createUser(user.email, user.phoneNumber, user.password);
    },
    onSuccess: async () => {
      const {token} = await signin('mor_2314', '83r5^_');
      setItem(token);
      setToken(token || '');
    },
  });

  const handleVerification = (code: string) => {
    verifyOtp(user.phoneNumber, code).then(async ({success}) => {
      if (!success) setInvalidCode(true);
      else {
        if (redirectFrom === 'Signup') {
          mutation.mutate(user as SignUp);
        } else {
          setItem(token || '');
          setToken(token || '');
        }
      }
    });
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <Text style={styles.prompt}>Enter the code we sent you</Text>
      <Text style={styles.message}>
        {`Your phone (${user.phoneNumber}) will be used to protect your account each time you log in.`}
      </Text>
      <OTPInputView
        style={{width: '80%', height: 200}}
        pinCount={6}
        autoFocusOnLoad
        codeInputFieldStyle={styles.underlineStyleBase}
        codeInputHighlightStyle={styles.underlineStyleHighLighted}
        onCodeFilled={handleVerification}
      />
      {invalidCode && <Text style={styles.error}>Incorrect code.</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  borderStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
    color: 'black',
    fontSize: 20,
  },

  underlineStyleHighLighted: {
    borderColor: '#03DAC6',
  },

  prompt: {
    fontSize: 24,
    paddingHorizontal: 30,
    paddingBottom: 20,
  },

  message: {
    fontSize: 16,
    paddingHorizontal: 30,
  },

  error: {
    color: 'red',
  },
});
