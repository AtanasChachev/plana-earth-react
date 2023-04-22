import { GenericQueryResponse } from 'services/types';
import { Product } from 'models/products';

export interface GetProductsReturn extends GenericQueryResponse {
  products: Product[];
}