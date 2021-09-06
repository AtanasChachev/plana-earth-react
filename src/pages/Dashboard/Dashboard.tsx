import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { State } from 'models/store';
import { useDispatch, useSelector } from 'react-redux';
import { Section, SelectComponent, Datepicker } from 'components/index';
import { SETTINGS } from 'config/settings';

import { ProductState } from 'models/products';
import { updateCurrentProduct } from 'store/actions/products';

import './Dashboard.scss';

const Dashboard = (): JSX.Element => {
  const dispatch = useDispatch();
  const { 
    products,
    currentProduct,
  }: ProductState = useSelector((state: State) => state.productsState);

  useEffect(() => {
    console.log(currentProduct);
  }, [currentProduct]);

  /* Updating the current chosen product in the store so we can set min / max dates for the datepickers */
  const updateCurrentProductCallback = (value: string | unknown) => {
    const optionIndex = products.findIndex(product => product.id === value);
 
    if (optionIndex > -1) dispatch(updateCurrentProduct(products[optionIndex]));
  };

  return (
    <Grid container className="dashboard"> 
      <Grid item xs={12} md={4} lg={3}>
        <Section 
          shAlignInlineBlockOnMobile={true} 
          isFullHeight={true} 
          headerTitle='Filters:'>
          <SelectComponent 
            options={products}
            placeholder={'Product'}
            onChange={(value: string | unknown) => updateCurrentProductCallback(value)} />

          <SelectComponent 
            className={`dashboard__form__field ${currentProduct ? 'dashboard__form__field--visible' : ''}`}
            options={[...SETTINGS.countries]}
            placeholder={'Country'}
            onChange={(value: string | unknown) => {
              console.log(value);
              console.log('changed');
            }} />

          <Datepicker 
            className={`dashboard__form__field ${currentProduct ? 'dashboard__form__field--visible' : ''}`}
            label='Start Date'
            minDate={currentProduct ? currentProduct.first : ''}
            maxDate={currentProduct ? currentProduct.last : ''}
          />

          <Datepicker  
            className={`dashboard__form__field ${currentProduct ? 'dashboard__form__field--visible' : ''}`}
            label='End Date'
            minDate={currentProduct ? currentProduct.first : ''}
            maxDate={currentProduct ? currentProduct.last : ''}
          />
        </Section>
      </Grid>

      <Grid item xs={12} md={8} lg={9}>
        <Section isFullHeight={true}>
          <p>Chart goes here</p>
        </Section>
      </Grid>
    </Grid>
  );
};

export { Dashboard };