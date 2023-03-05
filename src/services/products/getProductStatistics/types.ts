import { ProductStatistics } from 'models/products';
import { GenericQueryResponse } from 'services/types';

export interface UseGetProductStatisticParams {
  name: string;
  id: string;
  startDate: string;
  endDate: string;
  interval: string;
}

export interface UseGetProductStatisticReturn extends GenericQueryResponse {
  productsRangeData: ProductStatistics[];
}