import React, { useEffect, useCallback } from 'react';
import './styles/styles.scss';

import { productsService } from 'services/products-service';
import { ProductsHTTPResponse } from 'models/products';
import { MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import { SETTINGS } from 'config/settings';
import { Dashboard } from 'pages/index';
import { updateProducts } from 'store/actions/products';
import { useDispatch } from 'react-redux';
import { Product } from 'models/products';

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

  /* Initially fetching the products */
  const fetchProducts = useCallback(async () => {
    try {
      const { data }: ProductsHTTPResponse = await productsService.getProducts() as ProductsHTTPResponse;

      if (data && data.length) {
        const products = [...data];

        products.forEach((product: Product) => product.id = product.name);
        dispatch(updateProducts(products));
      }
    } catch (e) {}
  }, [dispatch]);

  useEffect(() => {
    void fetchProducts();
  }, [fetchProducts]);

  return (
    <MuiThemeProvider theme={theme}>
      <Dashboard />
    </MuiThemeProvider>
  );
};

export default App;
