import React, { useEffect } from 'react';
import './styles/styles.scss';

import { productsService } from './services/products-service';
import { ProductsHTTPResponse } from './models/products';

const App = (): JSX.Element => {
  const fetchProducts = async () => {
    try {
      const { data }: ProductsHTTPResponse = await productsService.getProducts() as ProductsHTTPResponse;
      
      if (data && data.length) {
        console.log(data);
      }
    } catch (e) {}
  };

  useEffect(() => {
    void fetchProducts();
  }, []);

  return (
    <div className="App">
      <h1>Project Init</h1>
    </div>
  );
};

export default App;
