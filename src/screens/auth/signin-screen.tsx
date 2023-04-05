import React from 'react';
import {StyleSheet} from 'react-native';
import {useForm, FormProvider} from 'react-hook-form';
import {Signup} from 'components/auth/signup';
import {useAuthStore} from 'hooks/store/use-auth-store';
import {useNavigation} from '@react-navigation/native';
import {AuthNavigationStackProp} from 'navigation/auth-navigation';
import {sendOtpViaWhatsapp} from 'services/phone-service';
import Toast from 'react-native-toast-message';
import {Signin} from 'components/auth/signin';
import {signin} from 'services/user-service';
import {User} from 'utils.ts/types';

type Signin = Required<Omit<User, 'email'>>;

export const SigninScreen = (): JSX.Element => {
  const {setUser} = useAuthStore(state => state);
  const form = useForm({
    defaultValues: {username: '', phoneNumber: '', password: ''},
  });
  const navigation = useNavigation<AuthNavigationStackProp<'Signin'>>();

  const {watch, handleSubmit} = form;
  const watchUsername = watch('username', '');
  const watchPassword = watch('password', '');
  const watchPhone = watch('phoneNumber');
  const handleSignin = handleSubmit(async (values: Signin) => {
    setUser(values);
    try {
      const {token} = await signin(values.username, values.password);
      await sendOtpViaWhatsapp(values.phoneNumber);
      Toast.show({
        type: 'success',
        position: 'bottom',
        text1: 'Otp sent.',
      });
      navigation.navigate('Otp', {redirectFrom: 'Signin', token: token});
    } catch (error: any) {
      console.log(error);
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: error.message,
      });
    }
  });

  const handleSignUp = () => {
    navigation.navigate('Signup');
  };

  return (
    <>
      <FormProvider {...form}>
        <Signin
        onSignup={handleSignUp}
          handleSignin={handleSignin}
          disableSubmit={!watchUsername || !watchPassword || !watchPhone}
        />
      </FormProvider>
    </>
  );
};
