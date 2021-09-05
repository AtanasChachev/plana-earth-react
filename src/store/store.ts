import { createStore, combineReducers } from 'redux';
import ProductsReducer from './reducers/products';

const reducers = combineReducers({
  productsState: ProductsReducer,
});

export const store = createStore(reducers);
