import { MutationObserverBaseResult, QueryObserverBaseResult } from '@tanstack/react-query';
import { UseMutateFunction } from '@tanstack/react-query';

export type GenericQueryResponse = Partial<QueryObserverBaseResult>;
export type GenericMutationResponse<T> = Partial<MutationObserverBaseResult<unknown, unknown, T>>;

export enum HTTPMutationMethods {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}
// export type HTTPMutationMethods = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export type MutationFunction<T> = UseMutateFunction<Response, unknown, T, unknown>;
