import { UPDATE_PRODUCTS, UPDATE_CURRENT_PRODUCT } from '../constants/products';
import { Product, UpdateProductsReducer, UpdateCurrentProductReducer } from '../../models/products';

export const updateProducts = (products: Product[]): UpdateProductsReducer => ({
  type: UPDATE_PRODUCTS,
  payload: products,
});

export const updateCurrentProduct = (product: Product): UpdateCurrentProductReducer => ({
  type: UPDATE_CURRENT_PRODUCT,
  payload: product,
});
