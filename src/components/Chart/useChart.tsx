import { State } from 'models/store';
import { useSelector } from 'react-redux';
import { ChartStateData } from 'models/chart';

type Return = {
  data: ChartStateData;
};

export const useChart = (): Return => {
  const { data } = useSelector((state: State) => state.chartState);

  return {
    data,
  };
};