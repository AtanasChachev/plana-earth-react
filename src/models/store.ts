import { ChartState } from './chart';
import { ProductState } from './products';
import { UserInterfaceState } from './ui';

export type State = {
  productsState: ProductState;
  chartState: ChartState;
  uiState: UserInterfaceState;
};

export type StateAction = {
  type: symbol;
  payload: never;
};