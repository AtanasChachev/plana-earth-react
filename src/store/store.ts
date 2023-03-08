import { createStore, combineReducers } from 'redux';
import ProductsReducer from './reducers/products';
import ChartReducer from './reducers/chart';
import UserInterfaceReducer  from './reducers/ui';

const reducers = combineReducers({
  productsState: ProductsReducer,
  chartState: ChartReducer,
  uiState: UserInterfaceReducer,
});

export const store = createStore(reducers);
