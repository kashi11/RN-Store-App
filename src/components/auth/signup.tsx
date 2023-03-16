import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {
  FieldValues,
  FieldErrors,
  Control,
} from 'react-hook-form';
import {ControlledInput} from 'components/shared/ControlledInput';

type Props<T extends FieldValues = FieldValues> = {
  control: Control<T, any>;
  errors: FieldErrors<T>;
  disableSubmit?: boolean;
  handleSignup: () => void;
};

export const Signup = <T extends FieldValues = FieldValues>({
  control,
  errors,
  disableSubmit,
  handleSignup,
}: Props<T>): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Signup</Text>
      {/* <ControlledInput
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
      /> */}
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
