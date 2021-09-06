import { UPDATE_PRODUCTS, UPDATE_CURRENT_PRODUCT, UPDATE_ACTIVE_FILTERS } from '../constants/products';
import { ProductState } from '../../models/products';
import { StateAction } from '../../models/store';
 
const productsState: ProductState = {
  currentProduct: null,
  products: [],
  activeFilters: {
    name: '',
    country: '',
    startDate: '',
    endDate: '',
    interval: 'day',
  },
};

const ProductsReducer = (
  state: ProductState = productsState,
  action: StateAction,
): ProductState => {
  switch (action.type) {
    case UPDATE_PRODUCTS: {
      return { ...state, products: action.payload };
    }

    case UPDATE_CURRENT_PRODUCT: {
      return { ...state, currentProduct: action.payload };
    }

    case UPDATE_ACTIVE_FILTERS : {
      const { propName, propValue } = action.payload;
      const localState = { ...state };

      localState.activeFilters[propName] = propValue;
      
      return localState;
    }

    default: {
      return { ...state };
    }
  }
};

export default ProductsReducer;
