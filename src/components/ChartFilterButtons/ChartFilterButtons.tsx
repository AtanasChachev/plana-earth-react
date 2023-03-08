import { Button } from '@material-ui/core';
import { capitalizeWords } from 'utils/helpers';
import { CHART_SETTINGS  } from 'constants/index';
import { useChartFilterButtons } from './useChartFilterButtons';

import './ChartFilterButtons.scss';

export interface ChartFilterButtonsProps {
  onClick(interval: string): void;
}

const ChartFilterButtons = ({ onClick }: ChartFilterButtonsProps): JSX.Element => {
  const { activeIndex, handleFilterButton } = useChartFilterButtons({ onClick });

  return (
    <div className="chart-buttons">
      {
        CHART_SETTINGS.chartFilterButtons.map((interval: string, index: number) => {
          const handleClick = () => handleFilterButton(interval, index);

          return (
            <Button
              data-testid="chart-filter-button"
              aria-label={`Chart filter button - click to filter the chart by ${interval}`}
              key={index} 
              className={`chart-buttons__button ${index === activeIndex ? 'chart-buttons__button--active' : ''}`}
              color="primary"
              onClick={handleClick}>{capitalizeWords(interval)}
            </Button>);
        },
        ) 
      }
    </div>
  );
};

export { ChartFilterButtons };