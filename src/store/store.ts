import { createStore, combineReducers } from 'redux';
import UserInterfaceReducer  from './reducers/ui';

const reducers = combineReducers({
  uiState: UserInterfaceReducer,
});

export const store = createStore(reducers);
