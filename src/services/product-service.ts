import axios from 'axios';
import Config from 'react-native-config';
import {Product} from 'utils.ts/types';

export const getAllProducts = async (sort: string): Promise<Product[]> => {
  const {data} = await axios.get(`${Config.BASE_API_URL}/products`, {
    params: {sort},
  });
  return data;
};
