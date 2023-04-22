import { ProductAverage, ProductStatisticsValue } from './products';

export type ChartData = ProductAverage[];

export interface ChartDataHTTPResponse {
  data: ChartData[];
}

export interface ChartReducerData {
  type: symbol;
  payload: ChartData[];
}

export interface ChartState {
  data: ProductStatisticsValue[];
}

export interface ChartStateData {
  labels: string[];
  datasets: ChartDataset[];
}

export interface ChartDataset {
  label: string;
  data: number[];
  fill: boolean;
  backgroundColor: string;
  borderColor: string;
}