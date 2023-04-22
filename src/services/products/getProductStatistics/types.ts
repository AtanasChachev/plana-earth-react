import { ProductStatistics, ActiveProductFilters } from 'models/products';
import { GenericQueryResponse } from 'services/types';

export interface UseGetProductStatisticParams extends Omit<ActiveProductFilters, 'country'>{
  id: string;
}

export interface UseGetProductStatisticReturn extends GenericQueryResponse {
  productsRangeData: ProductStatistics[];
}