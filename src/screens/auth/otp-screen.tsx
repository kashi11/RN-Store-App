import {useNavigation} from '@react-navigation/native';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {useAuthStore} from 'hooks/store/use-auth-store';
import {AuthNavigationStackProp} from 'navigation/auth-navigation';
import {useState} from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';
import {verifyOtp} from 'services/phone-service';

export const OtpScreen = () => {
  const {user} = useAuthStore();
  const [invalidCode, setInvalidCode] = useState(false);
  const navigation = useNavigation<AuthNavigationStackProp<'Otp'>>();

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
        onCodeFilled={code => {
          verifyOtp(user.phoneNumber, code).then(success => {
            if (!success) setInvalidCode(true);
            success && navigation.navigate('Signup');
          });
        }}
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

  borderStyleBase: {
    width: 30,
    height: 45,
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
