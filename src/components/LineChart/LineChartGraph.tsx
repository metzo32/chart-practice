import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import { type StockDataPoint } from "@/data/mockData";
import { theme } from "@/styles/theme";

type LineChartGraphProps = {
  data: StockDataPoint[];
};

export function LineChartGraph({ data }: LineChartGraphProps) {
  const generalTick = (val: string, index: number) => {
    return index % 3 === 0 ? val.slice(5).replace("-", ".") : "";
  };

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid />
        <XAxis dataKey="date" tickFormatter={generalTick} />
        <YAxis yAxisId="left" />
        <Line
          type="monotone"
          dataKey="price"
          stroke={theme.colors.primary}
          dot={false}
          activeDot={false}
          yAxisId="left"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
