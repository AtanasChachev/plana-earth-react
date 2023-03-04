import { useEffect, useCallback, useState } from 'react';
import { State } from 'models/store';
import { useDispatch, useSelector } from 'react-redux';

import { ProductState } from 'models/products';
import { ChartDataHTTPResponse } from 'models/chart';
import { productsService } from 'services/products-service';
import { updateChartData } from 'store/actions/chart';
import { capitalizeWords } from 'utils/helpers';
import { showLoader, showToast } from 'store/actions/ui';
import { updateCurrentProduct, updateActiveFilters } from 'store/actions/products';
import { Product } from 'models/products';

type Return = {
  isFilterActive: boolean;
  products: Product[];
  currentProduct: Product | null;
  handleProductChange: (value: string) => void;
  handleCountryChange: (value: string, countryName?: string) => void;
  handleDatepickerStartDateChange: (date: string) => void;
  handleDatepickerEndDateChange: (date: string) => void;
  renderChartTitle: () => string;
  handleChartFilterButtonsChange: (intervalValue: string) => void;
};

export const useDashboard = (): Return => {
  const dispatch = useDispatch();
  const { 
    products,
    currentProduct,
    activeFilters: {
      name, country, startDate, endDate, interval,
    },
  }: ProductState = useSelector((state: State) => state.productsState);

  const [isFilterActive, updateFilterActive] = useState<boolean>(false);

  /* Fetching the product's average */ 
  const fetchProductStatistics = useCallback(async () => {
    dispatch(showLoader(true));

    try { 
      const productStatisticsData: ChartDataHTTPResponse = 
        await productsService.getProductStatistics({ name, country, startDate, endDate, interval }) ;

      if (productStatisticsData.data && productStatisticsData.data.length) {
        dispatch(updateChartData(productStatisticsData.data));
      } 

      updateFilterActive(!!(productStatisticsData.data && productStatisticsData.data.length));
    } catch (e) { 
      dispatch(showToast(true, 'We could not fetch the products. Please try again'));
    } finally {
      dispatch(showLoader(false));
    }
  }, [country, endDate, interval, name, startDate, dispatch]);

  /* Updating the current chosen product in the store so we can set min / max dates for the datepickers */
  const updateCurrentProductCallback = (value: string | unknown) => {
    const option = products.find(product => product.id === value);
 
    if (option) dispatch(updateCurrentProduct(option));
  };

  /* Rendering the title of the chart section's holder */
  const renderChartTitle = (): string => {
    return isFilterActive ? `Showing data for: ${capitalizeWords(name)} in ${country.name}` : '';
  };

  const handleProductChange = (value: string) => {
    dispatch(updateActiveFilters('name', value));
    updateCurrentProductCallback(value);
  };

  const handleCountryChange = (value: string, countryName?: string) =>
    dispatch(updateActiveFilters('country', { 
      id: value, name: countryName, 
    }));

  const handleDatepickerStartDateChange = (date: string) => dispatch(updateActiveFilters('startDate', date));
  const handleDatepickerEndDateChange = (date: string) => dispatch(updateActiveFilters('endDate', date));
  const handleChartFilterButtonsChange = (intervalValue: string) => dispatch(updateActiveFilters('interval', intervalValue));

  useEffect(() => {
    if (name.length &&
        country.id.length &&
        startDate.length &&
        endDate.length) {
      void fetchProductStatistics();
    }
  }, [interval, name, country, startDate, endDate, fetchProductStatistics ]);

  return {
    isFilterActive,
    products,
    currentProduct,
    handleProductChange,
    handleCountryChange,
    handleDatepickerStartDateChange,
    handleDatepickerEndDateChange,
    renderChartTitle,
    handleChartFilterButtonsChange,
  };
};