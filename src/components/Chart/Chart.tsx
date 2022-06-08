import { Line } from 'react-chartjs-2';
import { SETTINGS } from 'config/settings';
import { useChart } from './useChart';
import './Chart.scss';

const Chart = (): JSX.Element => {
  const { data } = useChart();

  return (
    <Line
      data={{ labels: data.labels, datasets: data.datasets }} 
      options={SETTINGS.chartOptions} />
  );
};

export { Chart };