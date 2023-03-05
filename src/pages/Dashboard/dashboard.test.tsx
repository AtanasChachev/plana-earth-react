import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { Dashboard } from './Dashboard';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import { THEME } from 'constants/index';

const theme = createTheme({
  palette: {
    primary: {
      main: THEME.palette.primary.main,
      contrastText: THEME.palette.primary.contrastText,
    },
  },
});

const setup = () => {
  const { asFragment } = render(
    <Provider store={store}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <MuiThemeProvider theme={theme}>
          <Dashboard />
        </MuiThemeProvider>
      </MuiPickersUtilsProvider>,
    </Provider>,
  );

  return { asFragment };
};

describe('<Dashboard />', () => {
  test('<Dashboard /> should render correctly', () => {
    const { asFragment } = setup();

    expect(asFragment()).toMatchSnapshot();
  });
});