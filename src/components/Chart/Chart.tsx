import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { CHART_SETTINGS, THEME } from 'constants/index';
import { ProductStatisticsValue } from 'models/products';

interface ChartProps {
  data: ProductStatisticsValue[];
}

const Chart = ({ data }: ChartProps): JSX.Element => 
  <div className="holder">
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <Line type="monotone" dataKey="average" stroke={CHART_SETTINGS.chartColors.average}/>
        <Line type="monotone" dataKey="min" stroke={CHART_SETTINGS.chartColors.min} />
        <Line type="monotone" dataKey="standard deviation" stroke={CHART_SETTINGS.chartColors.standarddeviation} />

        <CartesianGrid stroke={THEME.palette.primary.main} strokeDasharray="5 5" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  </div>;

export { Chart };