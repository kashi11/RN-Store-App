import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthNavigation} from './auth-navigation';
import {AppNavigation} from './app-navigation';
import {useAuth} from 'hooks/use-auth';
import {ActivityIndicator} from 'react-native';

export const Navigation = (): JSX.Element => {
  const {loading, token} = useAuth();

  if (loading)
    return (
      <ActivityIndicator
        size="large"
        style={{display: 'flex', alignItems: 'center', height: '100%'}}
      />
    );

  return (
    <NavigationContainer>
      {token ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};
