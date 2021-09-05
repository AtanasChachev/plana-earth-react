/* Product type */
export type Product = {
  id?: string;
  name: string;
  product_variable: string;
};

/* Type for the store action's callback */
export type UpdateProductsReducer = {
  type: symbol;
  payload: Product[];
};

/* Type for the products reducer in the store. */
export type ProductState = {
  products: Product[];
};

export type ProductsHTTPResponse = {
  data: Product[];
};