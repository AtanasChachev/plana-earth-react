import { ProductState } from './products';

export type State = {
  productsState: ProductState;
};

export type StateAction = {
  type: symbol;
  payload: never;
};