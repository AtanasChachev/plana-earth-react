import { HTTPMutationMethods } from './types';

const API_URL = process.env.REACT_APP_API_URL || '';

export const queryFetcher = <T>(url: string): Promise<T> =>
  fetch(`${API_URL}/${url}`).then((response: Response) => response.json());

export const queryMutation = (url: string, method: HTTPMutationMethods, data?: unknown): Promise<Response> => 
  fetch(`${`${API_URL}/${url}`}`, {
    method,
    body: JSON.stringify(data),
    headers: {
      'content-type': 'application/json',
    },
  }).then(async (response: Response) => {
    if (!response.ok) {
      /**
       * TODO - Check the return error types from the API.
       */
      // const requestResponse: APIError = await response.json();
      // throw requestResponse.errors || requestResponse.message;

      throw new Error('Ooops, something went wrong');
    } else {
      if (response.status === 204) return { success: true };
      return response.json();
    }
  });