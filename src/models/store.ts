import { ProductState } from './products';

export type State = {
  products: ProductState;
};

export type StateAction = {
  type: symbol;
  payload: never;
};