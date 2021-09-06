import { UPDATE_PRODUCTS, UPDATE_CURRENT_PRODUCT, UPDATE_ACTIVE_FILTERS } from '../constants/products';
import { Product, UpdateProductsReducer, UpdateCurrentProductReducer, UpdateActiveFiltersReducer } from '../../models/products';

export const updateProducts = (products: Product[]): UpdateProductsReducer => ({
  type: UPDATE_PRODUCTS,
  payload: products,
});

export const updateCurrentProduct = (product: Product): UpdateCurrentProductReducer => ({
  type: UPDATE_CURRENT_PRODUCT,
  payload: product,
});

export const updateActiveFilters = (propName: string, propValue: string): UpdateActiveFiltersReducer => ({
  type: UPDATE_ACTIVE_FILTERS,
  payload: {
    propName,
    propValue,
  },
});
