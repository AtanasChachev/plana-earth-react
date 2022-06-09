import { ProductAverage, ProductStatisticsValue } from './products';

export type ChartData = ProductAverage[];

export type ChartDataHTTPResponse = {
  data: ChartData[];
};

export type ChartReducerData = {
  type: symbol;
  payload: ChartData[];
};

export type ChartState = {
  data: ProductStatisticsValue[];
};

export type ChartStateData = {
  labels: string[];
  datasets: ChartDataset[];
};

export type ChartDataset = {
  label: string;
  data: number[];
  fill: boolean;
  backgroundColor: string;
  borderColor: string;
};