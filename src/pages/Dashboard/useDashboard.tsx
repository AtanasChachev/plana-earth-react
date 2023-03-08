import { useEffect, useState } from 'react';
import { ActiveProductFilters,  ProductStatisticsValue } from 'models/products';
import { capitalizeWords, formatDate } from 'utils/helpers';
import { Product } from 'models/products';
import { DEFAULT_ACTIVE_FILTERS } from 'constants/products';
import { useGetProductStatistic } from 'services/products/getProductStatistics';
import { getObjectValues } from 'utils/helpers';

interface UseDashboardProps {
  products: Product[];
}

interface Return {
  isFilterActive: boolean;
  products: Product[];
  currentProduct: Product | null;
  tableData: ProductStatisticsValue[];
  isLoading?: boolean;
  handleProductChange: (value: string) => void;
  handleCountryChange: (value: string, countryName?: string) => void;
  handleDatepickerStartDateChange: (date: string) => void;
  handleDatepickerEndDateChange: (date: string) => void;
  renderChartTitle: () => string;
  handleChartFilterButtonsChange: (intervalValue: string) => void;
}

export const useDashboard = ({ products }: UseDashboardProps): Return => {
  const [currentProduct, updateCurrentProduct] = useState<Product | null>(null);
  const [activeFilters, updateActiveFilters] = useState<ActiveProductFilters>({ ...DEFAULT_ACTIVE_FILTERS });

  const { productsRangeData, isFetching: isLoading }  = useGetProductStatistic({
    name: activeFilters.name,
    id: activeFilters.country.id,
    startDate: activeFilters.startDate,
    endDate: activeFilters.endDate,
    interval: activeFilters.interval,
  });

  const tableData = productsRangeData.reduce((mappedData: ProductStatisticsValue[], currentItem) => {
    mappedData.push({
      time: formatDate(currentItem.time.interval_start, 'YYYY-MM-DD'),
      ...currentItem.value,
    }); 

    return mappedData;
  }, []);

  const [isFilterActive, updateFilterActive] = useState<boolean>(false);

  const handleAllFiltersUpdateEffect = () => {
    const allFiltersActive = getObjectValues(activeFilters).every(obj => obj.length);
    updateFilterActive(allFiltersActive);
  };

  useEffect(handleAllFiltersUpdateEffect, [activeFilters]);

  const renderChartTitle = (): string => isFilterActive ? 
    `Showing data for: ${capitalizeWords(activeFilters.name)} in ${activeFilters.country.name}` : '';

  const handleProductChange = (value: string) => {
    const option = products.find(product => product.id === value);

    handleUpdateActiveFilter('name', option?.name || '');
    updateCurrentProduct(option as Product);
  };

  const handleCountryChange = (value: string, countryName?: string) => {
    handleUpdateActiveFilter('country', { 
      id: value, 
      name: countryName || '', 
    });
  };

  const handleDatepickerStartDateChange = (date: string) => handleUpdateActiveFilter('startDate', date);
  const handleDatepickerEndDateChange = (date: string) => handleUpdateActiveFilter('endDate', date);
  const handleChartFilterButtonsChange = (intervalValue: string) => handleUpdateActiveFilter('interval', intervalValue);

  const handleUpdateActiveFilter = (prop: string, value: string | ActiveProductFilters['country']) => 
    updateActiveFilters(object => ({
      ...object,
      [prop]: value,
    }));

  return {
    isFilterActive,
    products,
    tableData,
    currentProduct,
    isLoading,
    handleProductChange,
    handleCountryChange,
    handleDatepickerStartDateChange,
    handleDatepickerEndDateChange,
    renderChartTitle,
    handleChartFilterButtonsChange,
  };
};