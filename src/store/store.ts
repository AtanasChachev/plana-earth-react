import { createStore, combineReducers } from 'redux';
import ProductsReducer from './reducers/products';

const reducers = combineReducers({
  products: ProductsReducer,
});

export const store = createStore(reducers);
