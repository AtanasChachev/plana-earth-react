/* Product type */
export type Product = {
  id?: string;
  first?: string;
  last?: string;
  name: string;
  product_variable: string;
};

export type ActiveProductFilters = {
  name: string;
  country: {
    id: string;
    name: string;
  };
  startDate: string;
  endDate: string;
  interval: string;
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

export type UpdateActiveFiltersReducer = {
  type: symbol;
  payload: {
    propName: string;
    propValue: string | { id: string; name?: string; };
  };
};

/* Type for the products reducer in the store. */
export type ProductState = {
  currentProduct: Product | null;
  products: Product[];
  activeFilters: ActiveProductFilters;
};

export type ProductDateRange = {
  first: string;
  last: string;
};

export type ProductAverage = {
  average: number;
  end: string;
  start: string;
};

export type ProductStatistics  = {
  time: {
    interval_start: string;
    max: string;
    min: string;
  },
  value: TypeObjectKeys & ProductStatisticsValue;
};

type TypeObjectKeys = {
  [key: string]: number;
};

type ProductStatisticsValue = {
  average: number;
  count: number;
  max: number;
  min: number;
  standarddeviation: number; 
};

/* Type for the HTTP responses for the products */
export type ProductsHTTPResponse = {
  data: Product[];
};

export type ProductsDateRangeHTTPResnpose = {
  data: ProductDateRange;
};

export type ProductsAverageHTTPReponse = {
  data: ProductAverage[];
};