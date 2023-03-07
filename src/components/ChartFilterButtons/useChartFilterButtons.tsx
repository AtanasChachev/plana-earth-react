import { useState } from 'react';
import { ChartFilterButtonsProps } from './ChartFilterButtons';

interface Return {
  activeIndex: number;
  handleFilterButton: (interval: string, index: number) => void;
}

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