import React from 'react';
import {Button, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {useFormContext} from 'react-hook-form';
import {ControlledInput} from 'components/shared/controlled-input';
import {Colors} from 'react-native/Libraries/NewAppScreen';

type Props = {
  disableSubmit?: boolean;
  handleSignin: () => void;
  onSignup: () => void;
};

export const Signin = ({
  disableSubmit,
  handleSignin,
  onSignup,
}: Props): JSX.Element => {
  const {
    control,
    formState: {errors},
  } = useFormContext();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.heading}>Signin</Text>
      <ControlledInput
        rules={{required: true}}
        placeholder="Enter Username"
        error={errors.username?.message as string}
        name={'username'}
        control={control}
      />
      <ControlledInput
        error={errors.phone?.message as string}
        name="phoneNumber"
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
        title="Signin"
        onPress={handleSignin}></Button>
      <View style={styles.signupTextContainer}>
        <Text>Don't have an account?</Text>
        <Text style={styles.signupText} onPress={onSignup}>
          Signup now
        </Text>
      </View>
    </SafeAreaView>
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
  signupTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 6,
    marginTop: 8,
  },
  signupText: {
    color: Colors.black,
  },
});
