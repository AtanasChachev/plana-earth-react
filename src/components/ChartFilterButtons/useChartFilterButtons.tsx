import { useState } from 'react';
import { ChartFilterButtonsProps } from './ChartFilterButtons';

type Return = {
  activeIndex: number;
  handleFilterButton: (interval: string, index: number) => void;
};

export const useChartFilterButtons = ({ onClick }: ChartFilterButtonsProps): Return => {
  const [activeIndex, updateActiveIndex] = useState<number>(-1);

  const handleFilterButton = (interval: string, index: number) => {
    onClick(interval);
    updateActiveIndex(index);
  };

  return {
    activeIndex,
    handleFilterButton,
  };
};