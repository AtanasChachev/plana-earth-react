import React, { useEffect, useCallback, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { State } from 'models/store';
import { useDispatch, useSelector } from 'react-redux';
import { Section, SelectComponent, Datepicker, Chart, ChartFilterButtons, EmptyResults } from 'components/index';
import { SETTINGS } from 'config/settings';

import { ProductState } from 'models/products';
import { ChartDataHTTPResponse } from 'models/chart';
import { updateCurrentProduct, updateActiveFilters } from 'store/actions/products';
import { productsService } from 'services/products-service';
import { updateChartData } from 'store/actions/chart';
import { capitalizeWords } from 'utils/helpers';

import './Dashboard.scss';

const Dashboard = (): JSX.Element => {
  const dispatch = useDispatch();
  const { 
    products,
    currentProduct,
    activeFilters,
  }: ProductState = useSelector((state: State) => state.productsState);

  const [isFilterActive, updateFilterActive] = useState<boolean>(false);

  /* Fetching the product's average */ 
  const fetchProductStatistics = useCallback(async () => {
    try { 
      const { 
        name, 
        country, 
        startDate, 
        endDate,
        interval,
      } = activeFilters;

      const { data }: ChartDataHTTPResponse = 
        await productsService.getProductStatistics({ name, country, startDate, endDate, interval }) as ChartDataHTTPResponse;
 
      if (data && data.length) {
        updateFilterActive(true);
        dispatch(updateChartData(data));
      }
    } catch (e) { } 
  }, [activeFilters, dispatch]);

  /* Updating the current chosen product in the store so we can set min / max dates for the datepickers */
  const updateCurrentProductCallback = (value: string | unknown) => {
    const optionIndex = products.findIndex(product => product.id === value);
 
    if (optionIndex > -1) dispatch(updateCurrentProduct(products[optionIndex]));
  };

  /* Rendering the title of the chart section's holder */
  const renderChartTitle = (): string => {
    let title = '';
    
    if (isFilterActive) {
      title = `Showing data for: ${capitalizeWords(activeFilters.name)} in ${activeFilters.country.name}`;
    }
    
    return title;
  };

  useEffect(() => {
    if (activeFilters.name.length &&
        activeFilters.country.id.length &&
        activeFilters.startDate.length &&
        activeFilters.endDate.length) {
      void fetchProductStatistics();
    }
  }, [
    activeFilters.interval, 
    activeFilters.name, 
    activeFilters.country, 
    activeFilters.startDate, 
    activeFilters.endDate, 
    activeFilters, 
    fetchProductStatistics,
  ]);

  return (
    <Grid container className="dashboard"> 
      <Grid item xs={12} md={4} lg={3}>
        <Section 
          shAlignInlineBlockOnMobile={true} 
          isFullHeight={true} 
          headerTitle='Product filters:'>
          <SelectComponent 
            className="dashboard__form__field"
            options={products}
            placeholder={'Product'}
            onChange={(value: string) => {
              dispatch(updateActiveFilters('name', value));
              updateCurrentProductCallback(value);
            }} /> 

          <SelectComponent 
            className={`dashboard__form__field dashboard__form__field--animated ${currentProduct ? 'dashboard__form__field--animated-visible' : ''}`}
            options={[...SETTINGS.countries]}
            placeholder={'Country'}
            onChange={(value: string, name?: string) => dispatch(updateActiveFilters('country', { id: value, name: name }))} />

          <Datepicker 
            className={`dashboard__form__field dashboard__form__field--animated ${currentProduct ? 'dashboard__form__field--animated-visible' : ''}`}
            label='Start Date'
            minDate={currentProduct ? currentProduct.first : ''}
            maxDate={currentProduct ? currentProduct.last : ''}
            onChange={(date: string) => dispatch(updateActiveFilters('startDate', date))}
          />

          <Datepicker  
            className={`dashboard__form__field dashboard__form__field--animated ${currentProduct ? 'dashboard__form__field--animated-visible' : ''}`}
            label='End Date'
            minDate={currentProduct ? currentProduct.first : ''}
            maxDate={currentProduct ? currentProduct.last : ''}
            onChange={(date: string) => dispatch(updateActiveFilters('endDate', date))}
          />
        </Section>
      </Grid>

      <Grid item xs={12} md={8} lg={9}>
        <Section 
          headerTitle={renderChartTitle()}
          isFullHeight={true}>
            {
              isFilterActive ? <>
                <ChartFilterButtons onClick={(interval: string) => dispatch(updateActiveFilters('interval', interval))} />
                <Chart />
              </> :  <EmptyResults />
            }
        </Section>
      </Grid>
    </Grid>
  );
};

export { Dashboard };