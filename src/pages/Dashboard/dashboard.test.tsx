import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { Dashboard } from './Dashboard';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import { THEME } from 'constants/index';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const theme = createTheme({
  palette: {
    primary: {
      main: THEME.palette.primary.main,
      contrastText: THEME.palette.primary.contrastText,
    },
  },
});

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const mockProducts = [
  {
    'description': 'Dry-air mixing ratio of methane for cloud-free observations with a spatial resolution of 7x7km2 observed at about 13:30 local solar time from spectra measured by TROPOMI, total column',
    'name': 'methane',
    'product_variable': 'methane_mixing_ratio_bias_corrected',
    'id': 'methane',
    'first': '2019-01-01T00:26:47.791000Z',
    'last': '2023-03-03T03:16:44.542000Z',
  },
  {
    'description': 'Atmospheric content of carbon monoxide in `mol m¯²`, total column',
    'name': 'carbonmonoxide',
    'product_variable': 'carbonmonoxide_total_column',
    'id': 'carbonmonoxide',
    'first': '2019-01-01T00:23:31.235000Z',
    'last': '2023-03-03T13:28:56.552000Z',
  },
  {
    'description': 'Atmospheric content of ozone in `mol m¯²`, total column',
    'name': 'ozone',
    'product_variable': 'ozone_total_vertical_column',
    'id': 'ozone',
    'first': '2019-04-23T17:29:01.796000Z',
    'last': '2023-03-03T08:26:16.163000Z',
  },
  {
    'description': 'Nitrogen dioxide tropospheric column with a spatial resolution of 7x3.5km2 observed at about 13:30 local solar time from spectra measured by TROPOMI, total column',
    'name': 'nitrogendioxide',
    'product_variable': 'nitrogendioxide_tropospheric_column',
    'id': 'nitrogendioxide',
    'first': '2019-01-01T01:22:50.197000Z',
    'last': '2023-02-24T22:27:56.663000Z',
  },
];

const setup = () => {
  const { asFragment } = render(
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <MuiPickersUtilsProvider utils={MomentUtils}>
          <MuiThemeProvider theme={theme}>
            <Dashboard products={mockProducts} />
          </MuiThemeProvider>
        </MuiPickersUtilsProvider>,
      </Provider>
    </QueryClientProvider>,
  );

  return { asFragment };
};

describe('<Dashboard />', () => {
  test('<Dashboard /> should render correctly', () => {
    const { asFragment } = setup();

    expect(asFragment()).toMatchSnapshot();
  });
});