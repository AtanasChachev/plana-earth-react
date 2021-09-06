import React, { useEffect, useCallback } from 'react';
import Grid from '@material-ui/core/Grid';
import { State } from 'models/store';
import { useDispatch, useSelector } from 'react-redux';
import { Section, SelectComponent, Datepicker, Chart } from 'components/index';
import { SETTINGS } from 'config/settings';

import { ProductState } from 'models/products';
import { ChartDataHTTPResponse } from 'models/chart';
import { updateCurrentProduct, updateActiveFilters } from 'store/actions/products';
import { productsService } from 'services/products-service';
import { updateChartData } from 'store/actions/chart';
import './Dashboard.scss';

const Dashboard = (): JSX.Element => {
  const dispatch = useDispatch();
  const { 
    products,
    currentProduct,
    activeFilters,
  }: ProductState = useSelector((state: State) => state.productsState);
 
  /* Fetching the product's average */ 
  const fetchProductAverage = useCallback(async () => {
    try { 
      const { 
        name, 
        country, 
        startDate, 
        endDate,
      } = activeFilters;
      const { data }: ChartDataHTTPResponse = await productsService.getProductStatistics({ name, country, startDate, endDate, interval: 'day' }) as ChartDataHTTPResponse;
 
      if (data && data.length) {
        dispatch(updateChartData(data));
      }
    } catch (e) { } 
  }, [activeFilters, dispatch]);

  /* Updating the current chosen product in the store so we can set min / max dates for the datepickers */
  const updateCurrentProductCallback = (value: string | unknown) => {
    const optionIndex = products.findIndex(product => product.id === value);
 
    if (optionIndex > -1) dispatch(updateCurrentProduct(products[optionIndex]));
  };

  useEffect(() => {
    if (activeFilters.name.length &&
        activeFilters.country.length &&
        activeFilters.startDate.length &&
        activeFilters.endDate.length) {
      void fetchProductAverage();
    }
  }, [activeFilters.name, activeFilters.country, activeFilters.startDate, activeFilters.endDate, activeFilters, fetchProductAverage]);

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
            onChange={(value: string) => dispatch(updateActiveFilters('country', value))} />

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
        <Section isFullHeight={true}>
            <Chart />
        </Section>
      </Grid>
    </Grid>
  );
};

export { Dashboard };