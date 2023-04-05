import axios from 'axios';
import Config from 'react-native-config';

export const createUser = async (
  email: string,
  phone: string,
  password: string,
) => {
  const {data} = await axios.post(`${Config.BASE_API_URL}/users`, {
    email,
    phone,
    password,
  });
  return data;
};

export const signin = async (username: string, password: string) => {
  const {data} = await axios.post(`${Config.BASE_API_URL}/auth/login`, {
    username,
    password,
  });
  return data;
};
