import { UPDATE_PRODUCTS } from '../constants/products';
import { ProductState } from '../../models/products';
import { StateAction } from '../../models/store';
 
const productsState: ProductState = {
  products: [],
};

const ProductsReducer = (
  state: ProductState = productsState,
  action: StateAction,
): ProductState => {
  switch (action.type) {
    case UPDATE_PRODUCTS: {
      return { ...state, products: action.payload };
    }

    default: {
      return { ...state };
    }
  }
};

export default ProductsReducer;
