/* eslint-disable @typescript-eslint/no-unsafe-return */
import { UPDATE_CHART_DATA } from '../constants/chart';
import { StateAction } from '../../models/store';
import { ChartState, ChartDataset } from 'models/chart';
import { formatDate } from 'utils/helpers';
import { ProductStatistics } from 'models/products';
import { capitalizeWords } from 'utils/helpers';
import { SETTINGS } from 'config/settings';

const chartState: ChartState = {
  data: {
    labels: [],
    datasets: [],
  },
};

const ChartReducer = (
  state: ChartState = chartState,
  action: StateAction,
): ChartState => {
  switch (action.type) {
    case UPDATE_CHART_DATA: { 
      const statistics: ProductStatistics[] = action.payload,
        firstElement = statistics[0].value;
      
      const localState: ChartState = { ...state };
      const labels: string[] = [...statistics].map((product: ProductStatistics) => formatDate(product.time.interal_start, 'YYYY-MM-DD'));

      localState.data.labels = [];
      localState.data.datasets = [];

      for (const [key] of Object.entries(firstElement)) {
        let data: ChartDataset = {
          label: capitalizeWords(key),
          fill: false,
          data: [],
          backgroundColor: '',
          borderColor: '',
        };
        
        const datasets: number[] = [...statistics].map((product: ProductStatistics) => product.value[key]);

        data = {
          ...data,
          data: datasets,
          backgroundColor: SETTINGS.chartColors[key.replace(' ', '')],
          borderColor: SETTINGS.chartColors[key.replace(' ', '')],
        };

        localState.data.datasets.push(data);
      }

      localState.data.labels = labels;
      return localState;
    }

    default: {
      return { ...state };
    }
  }
};

export default ChartReducer;
