import React from 'react';
import { Line } from 'test-react-chartjs-2';
import { useSelector } from 'react-redux';
import { State } from 'models/store';
import './Chart.scss';

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
    xAxes: [{
      type: 'time',
      time: {
        unit: 'day',
      },
    }],
  },
};

const Chart = (): JSX.Element => {
  const { data } = useSelector((state: State) => state.chartState);

  return (
    <>
    {
      data.datasets.length && data.datasets[0].data.length && 
        <Line type="line" data={{ labels: data.labels, datasets: data.datasets }} options={options} />
    }
    </>
  );
};

export { Chart };