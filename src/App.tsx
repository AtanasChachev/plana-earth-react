import { useEffect, useMemo } from 'react';
import './styles/styles.scss';
import { Dashboard } from 'pages/index';
import { useDispatch } from 'react-redux';
import { Toast } from 'components/index';
import { showToast } from 'store/actions/ui';
import { useGetProducts } from 'services/products/getProducts';
import { useGetProductDataRange } from 'services/products/getProductDataRange';

const App = (): JSX.Element => {
  const { products, isError } = useGetProducts();
  const productDateRanges = useGetProductDataRange(products);
  const mappedProducts = useMemo(() => 
    products.length && productDateRanges.length ? products.map((product, index) => {
      const { first, last } = productDateRanges[index];
      
      return {
        ...product,
        id: product.name,
        first,
        last,
      };
    }) : [], [productDateRanges, products]);
  
  const dispatch = useDispatch();
  const handleProductsFetchErrorEffect = (): void => {
    if (isError) {
      dispatch(showToast(true, 'We could not fetch the products. Please try again'));
    }
  };

  useEffect(handleProductsFetchErrorEffect, [isError, dispatch]);

  return (
    <>
      <Dashboard products={mappedProducts} />
      <Toast />
    </>
  );
};

export default App;
