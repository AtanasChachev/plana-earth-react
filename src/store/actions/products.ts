import { UPDATE_PRODUCTS } from '../constants/products';
import { Product, UpdateProductsReducer } from '../../models/products';

export const updateProducts = (products: Product[]): UpdateProductsReducer => ({
  type: UPDATE_PRODUCTS,
  payload: products,
});
