import { useState } from 'react';
import { ChartFilterButtonsProps } from './types';
import { Return } from './types';

export const useChartFilterButtons = ({ onClick }: ChartFilterButtonsProps): Return => {
  const [activeIndex, updateActiveIndex] = useState<number>(0);

  const handleFilterButton = (interval: string, index: number) => {
    updateActiveIndex(index);
    onClick(interval);
  };

  return {
    activeIndex,
    handleFilterButton,
  };
};