import { State } from 'models/store';
import { useSelector } from 'react-redux';
import { ProductStatisticsValue } from 'models/products';
import { useEffect } from 'react';

type Return = {
  data: ProductStatisticsValue[];
};

export const useChart = (): Return => {
  const { data } = useSelector((state: State) => state.chartState);

  useEffect(() => {
    console.log(data);
  }, [data]);

  return {
    data,
  };
};