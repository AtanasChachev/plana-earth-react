import { UPDATE_PRODUCTS, UPDATE_CURRENT_PRODUCT } from '../constants/products';
import { ProductState } from '../../models/products';
import { StateAction } from '../../models/store';
 
const productsState: ProductState = {
  currentProduct: null,
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

    case UPDATE_CURRENT_PRODUCT: {
      return { ...state, currentProduct: action.payload };
    }

    default: {
      return { ...state };
    }
  }
};

export default ProductsReducer;
