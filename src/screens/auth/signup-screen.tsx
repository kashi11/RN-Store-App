import React from 'react';
import {StyleSheet} from 'react-native';
import {useForm, FormProvider} from 'react-hook-form';
import {Signup} from 'components/auth/signup';
import {useAuthStore} from 'hooks/store/use-auth-store';
import {useNavigation} from '@react-navigation/native';
import {AuthNavigationStackProp} from 'navigation/auth-navigation';
import {sendOtpViaWhatsapp} from 'services/phone-service';
import Toast from 'react-native-toast-message';

type SignupValues = {
  email: string;
  phoneNumber: string;
  password: string;
  username: string;
};

export const SignupScreen = (): JSX.Element => {
  const {setUser} = useAuthStore();
  const form = useForm({
    defaultValues: {email: '', phoneNumber: '', password: '', username: ''},
  });
  const navigation = useNavigation<AuthNavigationStackProp<'Signup'>>();

  const {watch, handleSubmit} = form;
  const watchEmail = watch('email', '');
  const watchPassword = watch('password', '');
  const watchPhone = watch('phoneNumber');

  const handleSignup = handleSubmit(async (values: SignupValues) => {
    setUser(values);
    try {
      await sendOtpViaWhatsapp(values.phoneNumber);
      Toast.show({
        type: 'success',
        position: 'bottom',
        text1: "Otp sent.",
      });
      navigation.navigate('Otp');
    } catch (error: any) {
      console.log(error.message);
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: error.message,
      });
    }
  });

  return (
    <>
      <FormProvider {...form}>
        <Signup
          handleSignup={handleSignup}
          disableSubmit={!watchEmail || !watchPassword || !watchPhone}
        />
      </FormProvider>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
