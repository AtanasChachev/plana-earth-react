import Grid from '@material-ui/core/Grid';
import { Section, SelectComponent, Datepicker, Chart, ChartFilterButtons, EmptyResults } from 'components/index';
import { COUNTRIES } from 'constants/index';
import { useDashboard } from './useDashboard';

import './Dashboard.scss';

const Dashboard = (): JSX.Element => {
  const {
    isFilterActive,
    products,
    currentProduct,
    tableData,
    handleProductChange,
    handleCountryChange,
    handleDatepickerStartDateChange,
    handleDatepickerEndDateChange,
    renderChartTitle,
    handleChartFilterButtonsChange,
  } = useDashboard();

  return (
    <Grid container className="dashboard"> 
      <Grid item xs={12} md={4} lg={3}>
        <Section
          isEmptyBlockActive={false} 
          isFullHeight={true}
          shAlignInlineBlockOnMobile={true}
          headerTitle='Product filters:'>
            {
              !!products.length ? <SelectComponent 
                ariaLabel="Select dropdown - choose product"
                className="dashboard__form__field"
                options={products}
                placeholder={'Product'}
                onChange={handleProductChange} /> : <></>
            }

          <SelectComponent 
            ariaLabel="Select dropdown - choose country"
            className={`dashboard__form__field dashboard__form__field--animated ${currentProduct ? 'dashboard__form__field--animated-visible' : ''}`}
            options={COUNTRIES}
            placeholder={'Country'}
            onChange={handleCountryChange} />

          <Datepicker 
            ariaLabel="Datepicker - choose the start date for the filter"
            className={`dashboard__form__field dashboard__form__field--animated ${currentProduct ? 'dashboard__form__field--animated-visible' : ''}`}
            label='Start Date'
            minDate={currentProduct ? currentProduct.first : ''}
            maxDate={currentProduct ? currentProduct.last : ''}
            onChange={handleDatepickerStartDateChange}
          />

          <Datepicker  
            ariaLabel="Datepicker - choose the end date for the filter"
            className={`dashboard__form__field dashboard__form__field--animated ${currentProduct ? 'dashboard__form__field--animated-visible' : ''}`}
            label='End Date'
            minDate={currentProduct ? currentProduct.first : ''}
            maxDate={currentProduct ? currentProduct.last : ''}
            onChange={handleDatepickerEndDateChange}
          />
        </Section>
      </Grid>

      <Grid item xs={12} md={8} lg={9}>
        <Section 
          isEmptyBlockActive={!isFilterActive}
          headerTitle={renderChartTitle()}
          shRenderLoader={true}
          isFullHeight={true}>
            {
              isFilterActive ? <>
                <ChartFilterButtons onClick={handleChartFilterButtonsChange} />
                <Chart data={tableData} />
              </> : <EmptyResults />
            }
        </Section>
      </Grid>
    </Grid>
  );
};

export { Dashboard };