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
};