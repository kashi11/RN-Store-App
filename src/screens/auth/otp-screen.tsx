import OTPInputView from '@twotalltotems/react-native-otp-input';
import {useAuthStore} from 'hooks/store/use-auth-store';

export const OtpScreen = (): JSX.Element => {
//   const {user} = useAuthStore();

  return (
    <OTPInputView
      style={{width: '80%', height: 200}}
      pinCount={6}
      autoFocusOnLoad
      onCodeFilled={code => {
        console.log(code);
      }}
    />
  );
};
