import { ChartState } from './chart';
import { ProductState } from './products';

export type State = {
  productsState: ProductState;
  chartState: ChartState;
};

export type StateAction = {
  type: symbol;
  payload: never;
};