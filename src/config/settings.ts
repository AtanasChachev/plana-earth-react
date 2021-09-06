import { Settings } from '../models/settings';

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
};