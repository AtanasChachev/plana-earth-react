import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { createTheme, MuiThemeProvider } from '@material-ui/core';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { SETTINGS } from 'config/settings';
import MomentUtils from '@date-io/moment';

const theme = createTheme({
  palette: {
    primary: {
      main: SETTINGS.theme.palette.primary.main,
      contrastText: SETTINGS.theme.palette.primary.contrastText,
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

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
      </MuiPickersUtilsProvider>
    </Provider>
  </QueryClientProvider>,

  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
