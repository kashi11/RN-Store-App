import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {HeaderButtonProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import {useAuth} from 'hooks/use-auth';
import React from 'react';
import {Button} from 'react-native';

export const AppHeaderRight = (props: HeaderButtonProps): JSX.Element => {
  const {logout} = useAuth();
  return <Button onPress={logout} title="Logout" />;
};
