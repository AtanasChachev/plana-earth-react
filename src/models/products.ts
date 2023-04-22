export interface Product {
  id?: string;
  first?: string;
  last?: string;
  name: string;
  product_variable: string;
}

export interface ActiveProductFilters extends Pick<Product, 'name'> {
  country: Country;
  startDate: string;
  endDate: string;
  interval: string;
}

export type ProductDateRange = Required<Pick<Product, 'first' | 'last'>>;

export interface ProductAverage extends Pick<ProductStatisticsValue, 'average'>{
  end: string;
  start: string;
}

export interface ProductStatistics {
  time: {
    interval_start: string;
    max: string;
    min: string;
  },
  value: TypeObjectKeys & ProductStatisticsValue;
}

type TypeObjectKeys = {
  [key: string]: number;
};

export interface ProductStatisticsValue {
  average: number;
  count: number;
  max: number;
  min: number;
  standarddeviation: number;
  time?: string;
}

export interface Country {
  id: string;
  name: string;
}