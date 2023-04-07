import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {useAuthStore} from './store/use-auth-store';
import {useEffect, useState} from 'react';

export const useAuth = () => {
  const {setToken, token} = useAuthStore();
  const {getItem, removeItem} = useAsyncStorage('token');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getItem().then(value => {
      setToken(value || '');
      setLoading(false);
    });
  }, []);

  const logout = () => {
    removeItem().then(() => setToken(''));
  };

  return {token, logout, loading};
};
