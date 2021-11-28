import axios, { AxiosResponse } from 'axios';

const apiUrl: string = process.env.REACT_APP_API_URL || '';

const apiService = {
  /* Handling get methods */
  async get(endpoint: string, params?: never): Promise<AxiosResponse> {
    return axios.get(`${apiUrl}/${endpoint}`, {
      params: params,
    });
  },

  /* Handling post methods */
  async post(endpoint: string, params?: never): Promise<AxiosResponse> {
    return axios.post(`${apiUrl}/${endpoint}`, params);
  },
};

export { apiService };
