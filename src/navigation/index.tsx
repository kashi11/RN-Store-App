import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {useAuthStore} from 'hooks/store/use-auth-store';
import {AuthNavigation} from './auth-navigation';
import {AppNavigation} from './app-navigation';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

export const Navigation = (): JSX.Element => {
  const {setToken, token, user} = useAuthStore();
  const {getItem, removeItem} = useAsyncStorage('token');
  // removeItem()
  console.log("app",{user})
  useEffect(() => {
    getItem().then(value => setToken(value || ''));
  }, []);

  return (
    <NavigationContainer>
      {token ? <AppNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};
