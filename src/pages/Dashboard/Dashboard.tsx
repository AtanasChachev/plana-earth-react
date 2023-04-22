import Grid from '@material-ui/core/Grid';
import { COUNTRIES } from 'constants/index';
import { useDashboard } from './useDashboard';
import Section from 'components/Section';
import SelectComponent from 'components/Select/Select';
import Datepicker from 'components/Datepicker';
import Chart from 'components/Chart';
import ChartFilterButtons from 'components/ChartFilterButtons';
import EmptyResults from 'components/EmptyResults';
import Loader from 'components/Loader';
import { DashboardProps } from './types';

import './Dashboard.scss';


const Dashboard = ({ products }: DashboardProps): JSX.Element => {
  const {
    isFilterActive,
    currentProduct,
    tableData,
    isLoading,
    handleProductChange,
    handleCountryChange,
    handleDatepickerStartDateChange,
    handleDatepickerEndDateChange,
    renderChartTitle,
    handleChartFilterButtonsChange,
  } = useDashboard({ products });

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
            minDate={currentProduct?.first ?? ''}
            maxDate={currentProduct?.last ?? ''}
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
          isFullHeight={true}>
            {
              isFilterActive ? <>
                <ChartFilterButtons onClick={handleChartFilterButtonsChange} />
                <Chart data={tableData} />
              </> : <EmptyResults />
            }

            <Loader showLoader={isLoading} />
        </Section>
      </Grid>
    </Grid>
  );
};

export default Dashboard;