import { AxiosResponse } from 'axios';
import { apiService } from './api-service';
import { ActiveProductFilters } from 'models/products';

type ProductHTTPProp = {
  product: string;
};

const productsService = {
  /* Fetching products */
  getProducts(): Promise<AxiosResponse> {
    return apiService.get('products.json'); 
  },
  
  /* Fetching product's daterange availability */
  getProductDataRange({ product }: ProductHTTPProp): Promise<AxiosResponse> {
    return apiService.get(`${product}/data-range.json`);
  },
  
  /* Fetching product statistics */
  getProductStatistics({ name, country, startDate, endDate, interval }: ActiveProductFilters): Promise<AxiosResponse> {
    return apiService.get(`${name}/statistics.json?country=${country}&begin=${startDate}&end=${endDate}&interval=${interval}`);
  },
};

export { productsService };
