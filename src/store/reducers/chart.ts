import { UPDATE_CHART_DATA } from '../constants/chart';
import { StateAction } from '../../models/store';
import { ChartState } from 'models/chart';
import { formatDate } from 'utils/helpers';
import { ProductStatistics, ProductStatisticsValue } from '../../models/products';

const chartState: ChartState = {
  data: [],
};

const ChartReducer = (
  state: ChartState = chartState,
  action: StateAction,
): ChartState => {
  switch (action.type) {
    case UPDATE_CHART_DATA: { 
      const statistics: ProductStatistics[] = action.payload;
      const mappedStatistics = statistics.reduce((newArr: ProductStatisticsValue[], currentItem) => {
        newArr.push({
          time: formatDate(currentItem.time.interval_start, 'YYYY-MM-DD'),
          ...currentItem.value,
        });

        return newArr;
      }, []);

      return { ...state, data: mappedStatistics  };
    }

    default: {
      return { ...state };
    }
  }
};

export default ChartReducer;
