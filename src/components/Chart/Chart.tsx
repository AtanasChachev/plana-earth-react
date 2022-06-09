import { useChart } from './useChart';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
import './Chart.scss';

const Chart = (): JSX.Element => {
  const { data } = useChart();

  return (
    <div className="holder">
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={data}>
          <Line type="monotone" dataKey="average" stroke="#8884d8" />
          <Line type="monotone" dataKey="min" stroke="red" />
          <Line type="monotone" dataKey="standard deviation" stroke="purple" />

          <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export { Chart };