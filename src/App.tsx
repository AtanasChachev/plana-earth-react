import React, { useEffect, useCallback } from 'react';
import './styles/styles.scss';

import { productsService } from 'services/products-service';
import { ProductsHTTPResponse, ProductsDateRangeHTTPResnpose } from 'models/products';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import { SETTINGS } from 'config/settings';
import { Dashboard } from 'pages/index';
import { updateProducts } from 'store/actions/products';
import { useDispatch } from 'react-redux';
import { Product } from 'models/products';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import { Toast } from 'components/index';
import MomentUtils from '@date-io/moment';
import { showToast } from 'store/actions/ui';

/* Overriding the theme colors to match Plana Earth colors */
const theme = createTheme({
  palette: {
    primary: {
      main: SETTINGS.theme.palette.primary.main,
      contrastText: SETTINGS.theme.palette.primary.contrastText,
    },
  },
});

const App = (): JSX.Element => {
  const dispatch = useDispatch();

  /* Assigning the date range for each product */
  const assignDateRangeForProduct = useCallback(async (productObject: Product) => {
    try {
      const product = productObject.name, 
        { data }: ProductsDateRangeHTTPResnpose = await productsService.getProductDataRange({ product }) as ProductsDateRangeHTTPResnpose;

      if (data) {
        productObject.id = productObject.name;
        productObject.first = data.first;
        productObject.last = data.last;
      }
    } catch (e) {
      dispatch(showToast(true, 'We could not fetch the date range for all the products. Please try again'));
    }
  }, [dispatch]);

  /* Initially fetching the products */
  const fetchProducts = useCallback(async () => {
    try {
      const { data }: ProductsHTTPResponse = await productsService.getProducts() as ProductsHTTPResponse;

      if (data && data.length) {
        const products = [...data];

        for (const product of products) {
          await assignDateRangeForProduct(product);
        }

        dispatch(updateProducts(products));
      }
    } catch (e) {
      dispatch(showToast(true, 'We could not fetch the products. Please try again'));
    }
  }, [assignDateRangeForProduct, dispatch]);

  useEffect(() => {
    void fetchProducts();
  }, [fetchProducts]);

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <MuiThemeProvider theme={theme}>
        <Dashboard />
        <Toast />
      </MuiThemeProvider>
    </MuiPickersUtilsProvider>
  );
};

export default App;
