import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { State } from 'models/store';
import { SETTINGS } from 'config/settings';
import './Chart.scss';

const Chart = (): JSX.Element => {
  const { data } = useSelector((state: State) => state.chartState);

  return (
    <>
      <Line 
        data={{ labels: data.labels, datasets: data.datasets }} 
        options={SETTINGS.chartOptions} />
    </>
  );
};

export { Chart };