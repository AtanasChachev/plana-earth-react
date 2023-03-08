export interface Product {
  id?: string;
  first?: string;
  last?: string;
  name: string;
  product_variable: string;
}

export interface ActiveProductFilters {
  name: string;
  country: Country;
  startDate: string;
  endDate: string;
  interval: string;
}

export interface ProductDateRange {
  first: string;
  last: string;
}

export type ProductAverage = {
  average: number;
  end: string;
  start: string;
};

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