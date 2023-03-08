import { UPDATE_CHART_DATA } from '../constants/chart';
import { ChartData, ChartReducerData } from '../../models/chart';

export const updateChartData = (chartData: ChartData[]): ChartReducerData => ({
  type: UPDATE_CHART_DATA,
  payload: chartData,
});