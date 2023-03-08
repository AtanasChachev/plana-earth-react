import { useQuery } from '@tanstack/react-query';
import { queryFetcher } from 'services';
import { ProductStatistics } from 'models/products';
import { UseGetProductStatisticReturn, UseGetProductStatisticParams } from './types';

export const useGetProductStatistic = ({ name, id, startDate, endDate, interval }: UseGetProductStatisticParams): UseGetProductStatisticReturn => {
  const {
    data,
    ...args
  } = useQuery(['getProductStatistics', name, id, startDate, endDate, interval], 
    () => queryFetcher<ProductStatistics[]>(
      `${name}/statistics.json?country=${id}&begin=${startDate}&end=${endDate}&interval=${interval}`,
    ), 
    { 
      enabled: !!(name && id && startDate && endDate && interval), 
    });

  return {
    productsRangeData: data || [],
    ...args,
  };
};