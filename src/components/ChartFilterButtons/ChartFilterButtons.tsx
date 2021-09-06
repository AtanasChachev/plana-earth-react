import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { capitalizeWords } from 'utils/helpers';
import './ChartFilterButtons.scss';

const chartFilterButtons = ['day', 'week', 'month', 'quarter', 'year'];

type ChartFilterButtonsType = {
  onClick(interval: string): void;
};

const ChartFilterButtons = ({ onClick }: ChartFilterButtonsType): JSX.Element => {
  const [activeIndex, updateActiveIndex] = useState<number>(-1);

  return (
    <div className="chart-buttons">
      {
        chartFilterButtons.map((interval: string, index: number) => 
          <Button 
            key={index} 
            className={`chart-buttons__button ${index === activeIndex ? 'chart-buttons__button--active' : ''}`}
            color="primary"
            onClick={() => {
              onClick(interval);
              updateActiveIndex(index);
            }}>{capitalizeWords(interval)}</Button>)
      }
    </div>
  );
};

export { ChartFilterButtons };