import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useForm, FieldValues, FormProvider} from 'react-hook-form';
import {ControlledInput} from 'components/shared/ControlledInput';
import {useMutation} from 'react-query';
import {createUser} from 'services/user-service';
import {Signup} from 'components/auth/signup';

type SignupValues = {
  email: string;
  phone: string;
  password: string;
  username: string;
};

export const SignupScreen = (): JSX.Element => {
  const form = useForm({
    defaultValues: {email: '', phone: '', password: '', username: ''},
  });

  const mutateUser = useMutation(
    (values: SignupValues) =>
      createUser(values.email, values.phone, values.password),
    {onSuccess: () => console.log('success')},
  );

  const {watch, handleSubmit} = form;
  const watchEmail = watch('email', '');
  const watchPassword = watch('password', '');
  const watchPhone = watch('phone');

  const handleSignup = handleSubmit((values: SignupValues) => {
    mutateUser.mutate(values);
  });

  return (
    <FormProvider {...form}>
      <Signup
        handleSignup={handleSignup}
        disableSubmit={!watchEmail || !watchPassword || !watchPhone}
      />
    </FormProvider>
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
