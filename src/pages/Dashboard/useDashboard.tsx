import { useEffect, useState } from 'react';
import { State } from 'models/store';
import { useDispatch, useSelector } from 'react-redux';

import { ProductState, ProductStatisticsValue } from 'models/products';
import { capitalizeWords, formatDate } from 'utils/helpers';
import { updateCurrentProduct, updateActiveFilters } from 'store/actions/products';
import { Product } from 'models/products';
import { useGetProductStatistic } from 'services/products/getProductStatistics';

type Return = {
  isFilterActive: boolean;
  products: Product[];
  currentProduct: Product | null;
  tableData: ProductStatisticsValue[];
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

  const { productsRangeData }  = useGetProductStatistic({
    name, id: country.id, startDate, endDate, interval,
  });

  const tableData = productsRangeData.reduce((mappedData: ProductStatisticsValue[], currentItem) => {
    mappedData.push({
      time: formatDate(currentItem.time.interval_start, 'YYYY-MM-DD'),
      ...currentItem.value,
    });

    return mappedData;
  }, []);

  const [isFilterActive, updateFilterActive] = useState<boolean>(false);

  useEffect(() => {
    updateFilterActive(!!(productsRangeData && productsRangeData.length));
  }, [productsRangeData]);

  /* Updating the current chosen product in the store so we can set min / max dates for the datepickers */
  const updateCurrentProductCallback = (value?: string) => {
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

  return {
    isFilterActive,
    products,
    tableData,
    currentProduct,
    handleProductChange,
    handleCountryChange,
    handleDatepickerStartDateChange,
    handleDatepickerEndDateChange,
    renderChartTitle,
    handleChartFilterButtonsChange,
  };
};