import { createStore, combineReducers } from 'redux';
import ProductsReducer from './reducers/products';
import ChartReducer from './reducers/chart';

const reducers = combineReducers({
  productsState: ProductsReducer,
  chartState: ChartReducer,
});

export const store = createStore(reducers);
