import { Settings } from 'models/settings';
import { isMobileDevice } from 'utils/helpers';

export const SETTINGS: Settings = {
  theme: {
    palette: {
      primary: {
        main: '#FFFFFF',
        contrastText: '#000000',
      },
    },
  },
  countries: [
    {
      id: 'DE',
      name: 'Germany',
    },
    {
      id: 'FR',
      name: 'France',
    },
    {
      id: 'UK',
      name: 'United Kingdom',
    },
  ],
  chartColors: {
    average: '#1c73ff',
    count: '#ffa805',
    min: '#ffadad',
    max: '#00aa58',
    standarddeviation: '#66e5a8',
  },
  chartFilterButtons: ['day', 'week', 'month', 'quarter', 'year'],
  toastAutoDuration: 2000,
  chartOptions: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [{
        ticks:{
          display: !isMobileDevice(),
        },
      }],
    },
  },
};