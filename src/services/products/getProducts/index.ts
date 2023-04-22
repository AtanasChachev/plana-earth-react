import { useQuery } from '@tanstack/react-query';
import { queryFetcher } from 'services';
import { GetProductsReturn } from './types';
import { Product } from 'models/products';

const getProductsEndpoint = 'products.json';

export const useGetProducts = (): GetProductsReturn => {
  const {
    data,
    ...args
  } = useQuery(['getProducts'], () => queryFetcher<Product[]>(getProductsEndpoint));

  return {
    products: data || [],
    ...args,
  };
};