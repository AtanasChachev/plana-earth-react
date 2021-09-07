import React, { useState } from 'react';
import { Button } from '@material-ui/core';
import { capitalizeWords } from 'utils/helpers';
import { SETTINGS } from 'config/settings';

import './ChartFilterButtons.scss';

type ChartFilterButtonsType = {
  onClick(interval: string): void;
};

const ChartFilterButtons = ({ onClick }: ChartFilterButtonsType): JSX.Element => {
  const [activeIndex, updateActiveIndex] = useState<number>(-1);

  return (
    <div className="chart-buttons">
      {
        [...SETTINGS.chartFilterButtons].map((interval: string, index: number) => 
          <Button 
            aria-label={`Chart filter button - click to filter the chart by ${interval}`}
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