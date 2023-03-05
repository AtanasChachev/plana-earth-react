import { useQueries } from '@tanstack/react-query';
import { queryFetcher } from 'services';
import { Product } from '../getProducts/types';
import { ProductDataRange } from './types';
import { GenericQueryResponse } from '../../types';
import { toast } from 'react-toastify';

export const useGetProductDataRange = (products: Product[]): ProductDataRange[] => {
  const results: GenericQueryResponse[] = useQueries({
    queries: products.map(({ name }: Product) => {
      return {
        queryKey: ['productName', name],
        queryFn: () => queryFetcher<ProductDataRange>(`${name}/data-range.json`),
        onError: () => 
          toast.error('We could not fetch the date range for all the products. Please try again'),
        enabled: !!products.length,
      };
    }),
  });

  const allFinished = results.every(result => result.isSuccess);
  if (!allFinished) return [];

  return results.map(({ data }) => data) as ProductDataRange[];
};