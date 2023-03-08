import { GenericQueryResponse } from 'services/types';

export interface Product {
  id?: string;
  first?: string;
  last?: string;
  name: string;
  product_variable: string;
}

export interface GetProductsReturn extends GenericQueryResponse {
  products: Product[];
}