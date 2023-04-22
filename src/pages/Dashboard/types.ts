import { Product } from 'models/products';
import { ProductStatisticsValue } from 'models/products';

export interface DashboardProps {
  products: Product[];
}

export interface UseDashboardProps {
  products: Product[];
}

export interface Return {
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
