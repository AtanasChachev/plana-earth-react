/* Product type */
export type Product = {
  id?: string;
  first?: string;
  last?: string;
  name: string;
  product_variable: string;
};

/* Type for the store action's callback */
export type UpdateProductsReducer = {
  type: symbol;
  payload: Product[];
};

export type UpdateCurrentProductReducer = {
  type: symbol;
  payload: Product;
};

/* Type for the products reducer in the store. */
export type ProductState = {
  currentProduct: Product | null;
  products: Product[];
};

export type ProductDateRange = {
  first: string;
  last: string;
};

export type ProductsHTTPResponse = {
  data: Product[];
};

export type ProductsDateRangeHTTPResnpose = {
  data: ProductDateRange;
};