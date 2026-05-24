import type { CumulativeReturnDataPoint } from "@/data/mockData";
import { theme } from "@/styles/theme";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface AreaChartGraphProps {
  data: CumulativeReturnDataPoint[];
}

export function AreaChartGraph({ data }: AreaChartGraphProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data}>
        <CartesianGrid />
        <XAxis dataKey="month" />
        <YAxis unit="%" />
        <Area
          dataKey="portfolio"
          fill={theme.colors.primary}
          fillOpacity={0.3}
          stroke={theme.colors.primary}
        />
        <Area
          dataKey="kospi"
          fill={theme.colors.secondary}
          fillOpacity={0.3}
          stroke={theme.colors.secondary}
        />
        <Legend />
        <Tooltip />
      </AreaChart>
    </ResponsiveContainer>
  );
}
