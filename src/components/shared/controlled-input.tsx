import React from 'react';
import {TextInputProps} from 'react-native/types';
import {
  Control,
  Controller,
  FieldValues,
  Path,
  RegisterOptions,
} from 'react-hook-form';
import { Input } from './Input';

type Props<T extends FieldValues> = TextInputProps & {
  control: Control<T, any>;
  name: Path<T>;
  error?: string;
  rules?: Omit<RegisterOptions<T, Path<T>>, string>;
};

export const ControlledInput = <T extends FieldValues>({
  rules,
  control,
  name,
  error,
  ...rest
}: Props<T>): JSX.Element => {
  return (
    <Controller
      rules={rules}
      control={control}
      name={name}
      render={({field: {value, onChange}}) => (
        <Input error={error} value={value} {...rest} onChangeText={onChange} />
      )}
    />
  );
};
