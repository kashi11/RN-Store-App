import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useFormContext} from 'react-hook-form';
import {ControlledInput} from 'components/shared/ControlledInput';

type Props = {
  disableSubmit?: boolean;
  handleSignup: () => void;
};

export const Signup = ({disableSubmit, handleSignup}: Props): JSX.Element => {
  const {
    control,
    formState: {errors},
  } = useFormContext();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Signup</Text>
      <ControlledInput
        rules={{required: true}}
        placeholder="Enter email"
        error={errors.email?.message as string}
        name={'email'}
        keyboardType="email-address"
        control={control}
      />
      <ControlledInput
        rules={{required: true}}
        placeholder="Enter username"
        error={errors.username?.message as string}
        name="username"
        control={control}
      />
      <ControlledInput
        error={errors.phone?.message as string}
        name="phone"
        keyboardType="phone-pad"
        control={control}
        placeholder="Enter phone number"
      />
      <ControlledInput
        secureTextEntry
        error={errors.password?.message as string}
        name="password"
        control={control}
        placeholder="Enter password"
      />
      <Button
        disabled={disableSubmit}
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
