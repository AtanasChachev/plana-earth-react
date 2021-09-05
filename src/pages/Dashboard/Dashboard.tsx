import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { State } from 'models/store';
import { useSelector } from 'react-redux';
import { Section, SelectComponent } from 'components/index';
import { SETTINGS } from 'config/settings';

import './Dashboard.scss';
import { ProductState } from 'models/products';

const Dashboard = (): JSX.Element => {
  const { products }: ProductState = useSelector((state: State) => state.productsState);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <Grid container className="dashboard">
      <Grid item xs={12} md={4} lg={3}>
        <Section isFullHeight={true} headerTitle='Filters:'>
          <SelectComponent 
            options={products}
            placeholder={'Product'}
            onChange={(value: string | unknown) => {
              console.log(value);
              console.log('changed');
            }} />

          <SelectComponent 
            options={[...SETTINGS.countries]}
            placeholder={'Country'}
            onChange={(value: string | unknown) => {
              console.log(value);
              console.log('changed');
            }} />
        </Section>
      </Grid>

      <Grid item xs={12} md={8} lg={9}>
        <Section isFullHeight={true}>
          <p> !23213123123</p>
        </Section>
      </Grid>
    </Grid>
  );
};

export { Dashboard };