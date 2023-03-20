import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAuthStore} from 'hooks/store/use-auth-store';
import {AuthNavigation} from './auth-navigation';

export const Navigation = (): JSX.Element => {
  const {token} = useAuthStore();

  return (
    <NavigationContainer>
      {token ? <AuthNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};
