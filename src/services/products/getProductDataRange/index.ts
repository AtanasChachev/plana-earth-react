import { useQueries } from '@tanstack/react-query';
import { queryFetcher } from 'services';
import { Product } from '../getProducts/types';
import { ProductDataRange } from './types';
import { GenericQueryResponse } from '../../types';
import { useDispatch } from 'react-redux';
import { showToast } from 'store/actions/ui';

export const useGetProductDataRange = (products: Product[]): ProductDataRange[] => {
  const dispatch = useDispatch();
  const results: GenericQueryResponse[] = useQueries({
    queries: products.map(({ name }: Product) => {
      return {
        queryKey: ['productName', name],
        queryFn: () => queryFetcher<ProductDataRange>(`${name}/data-range.json`),
        enabled: !!products.length,
        onError: () => 
          dispatch(showToast(true, 'We could not fetch the date range for all the products. Please try again')),
      };
    }),
  });

  const allFinished = results.every(result => result.isSuccess);
  if (!allFinished) return [];

  return results.map(({ data }) => data) as ProductDataRange[];
};