import { useEffect, useMemo } from 'react';
import { Dashboard } from 'pages/index';
import { useGetProducts } from 'services/products/getProducts';
import { useGetProductDataRange } from 'services/products/getProductDataRange';
import { ToastContainer, toast } from 'react-toastify';

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
  
  const handleProductsFetchErrorEffect = (): void => {
    if (isError) {
      toast.error('We could not fetch the products. Please try again');
    }
  };

  useEffect(handleProductsFetchErrorEffect, [isError]);

  return (
    <>
      <Dashboard products={mappedProducts} />

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        theme='dark'
      />
    </>
  );
};

export default App;
