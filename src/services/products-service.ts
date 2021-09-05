import { AxiosResponse } from 'axios';
import { apiService } from './api-service';

const productsService = {
  /* Fetching products */
  async getProducts(): Promise<AxiosResponse> {
    return apiService.get('products.json');
  },
};

export { productsService };
