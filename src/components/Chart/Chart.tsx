import { useChart } from './useChart';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import { SETTINGS } from 'config/settings';
import './Chart.scss';

const Chart = (): JSX.Element => {
  const { data } = useChart();

  return (
    <div className="holder">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <Line type="monotone" dataKey="average" stroke={SETTINGS.chartColors.average}/>
          <Line type="monotone" dataKey="min" stroke={SETTINGS.chartColors.min} />
          <Line type="monotone" dataKey="standard deviation" stroke={SETTINGS.chartColors.standarddeviation} />

          <CartesianGrid stroke={SETTINGS.theme.palette.primary.main} strokeDasharray="5 5" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export { Chart };