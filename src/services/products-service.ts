import { AxiosResponse } from 'axios';
import { apiService } from './api-service';

type GetProductAverageProps = {
  product: string;
  country: string;
  start: string;
  end: string;
};

type ProductHTTPProp = {
  product: string;
};

const productsService = {
  /* Fetching products */
  getProducts(): Promise<AxiosResponse> {
    return apiService.get('products.json');
  },
  
  getProductAverage({ product, country, start, end }: GetProductAverageProps): Promise<AxiosResponse> {
    return apiService.get(`/${product}/average.json/country=${country}&begin=${start}&end=${end}`);
  },

  getProductDataRange({ product }: ProductHTTPProp): Promise<AxiosResponse> {
    return apiService.get(`/${product}/data-range.json`);
  },
};

export { productsService };
