import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useForm, FieldValues} from 'react-hook-form';
import {ControlledInput} from 'components/shared/ControlledInput';
import {useMutation} from 'react-query';
import {createUser} from 'services/user-service';

type SignupValues = {
  email: string;
  phone: string;
  password: string;
  username: string,
};

export const SignupScreen = (): JSX.Element => {
  const {
    control,
    watch,
    formState: {errors},
    handleSubmit,
  } = useForm({
    defaultValues: {email: '', phone: '', password: '', username: ''},
  });
  const mutateUser = useMutation(
    (values: SignupValues) =>
      createUser(values.email, values.phone, values.password),
    {onSuccess: () => console.log('success')},
  );

  const watchEmail = watch('email', '');
  const watchPassword = watch('password', '');
  const watchPhone = watch('phone');

  const handleSignup = handleSubmit((values: SignupValues) => {
    mutateUser.mutate(values);
  });

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Signup</Text>
      <ControlledInput
        rules={{required: true}}
        placeholder="Enter email"
        error={errors.email?.message}
        name="email"
        keyboardType="email-address"
        control={control}
      />
      <ControlledInput
        rules={{required: true}}
        placeholder="Enter username"
        error={errors.username?.message}
        name="username"
        control={control}
      />
      <ControlledInput
        error={errors.phone?.message}
        name="phone"
        keyboardType="phone-pad"
        control={control}
        placeholder="Enter phone number"
      />
      <ControlledInput
        secureTextEntry
        error={errors.password?.message}
        name="password"
        control={control}
        placeholder="Enter password"
      />
      <Button
        disabled={!watchEmail || !watchPassword || !watchPhone}
        title="Signup"
        onPress={handleSignup}></Button>
    </View>
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
